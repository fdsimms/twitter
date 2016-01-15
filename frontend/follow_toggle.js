(function () {

var FollowToggle = function (el) {
  this.$el = $(el);
  this.userId = this.$el.attr("data-user-id");
  if (this.$el.attr("data-follow-state") === true) {
    this.followState = "followed";
  } else {
    this.followState = "unfollowed";
  }
  this.render();
  this.$el.on("click", this.handleClick.bind(this));
};

FollowToggle.prototype.render = function () {
  if (this.followState === "followed") {
    this.$el.html("Unfollow");
  } else {
    this.$el.html("Follow!");
  }
};


FollowToggle.prototype.handleClick = function (e) {
  e.preventDefault();
  var method = (this.followState === "followed") ? "DELETE" : "POST";

  $.ajax({
    type: method,
    dataType: "json",
    url: "/users/" + this.userId + "/follow",
    success: function (data, statusText, xhr) {
      if (this.followState === "followed") {
        this.followState = "unfollowed";
      } else {
        this.followState = "followed";
      }
      this.render();
    }.bind(this),
    error: function (xhr, statusText, error) {
      console.log(error);
    }
  });

};

module.exports = FollowToggle;

})();
