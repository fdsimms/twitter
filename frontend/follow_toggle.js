(function () {

var FollowToggle = function (el) {
  this.$el = $(el);

  this.userId = this.$el.attr("data-user-id");
  this.followState = (this.followState || this.$el.attr("data-follow-state"));

  if (this.$el.attr("data-follow-state") === "true") {
    this.followState = "followed";
  } else {
    this.followState = "unfollowed";
  }

  this.$el.on("click", this.handleClick.bind(this));
  this.render();
};

FollowToggle.prototype.toggleFollowState = function () {
  if (this.followState === "followed") {
    this.followState = "unfollowing";
  } else if (this.followState === "unfollowing") {
    this.followState = "unfollowed";
    this.$el.attr("data-follow-state", "false");
  } else if (this.followState === "unfollowed") {
    this.followState = "following";
  } else if (this.followState === "following") {
    this.followState = "followed";
    this.$el.attr("data-follow-state", "true");
  }
  return this.followState;
};

FollowToggle.prototype.render = function () {

  if (this.followState === "followed") {
    this.$el.html("Unfollow");
    this.$el.prop("disabled", false);
  } else if (this.followState === "unfollowed") {
    this.$el.html("Follow!");
    this.$el.prop("disabled", false);
  } else {
    this.$el.prop("disabled", true);
  }
};


FollowToggle.prototype.handleClick = function (e) {
  e.preventDefault();
  var method = (this.followState === "followed") ? "DELETE" : "POST";

  this.toggleFollowState();
  this.render();
  $.ajax({
    type: method,
    dataType: "json",
    url: "/users/" + this.userId + "/follow",
    success: function (data, statusText, xhr) {
      this.toggleFollowState();
      this.render();
    }.bind(this),
    error: function (xhr, statusText, error) {
      console.log(error);
    }
  });

};

module.exports = FollowToggle;

})();
