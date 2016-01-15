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
  var followState = this.followState;
  $.ajax({
    type: method,
    url: "/users/" + this.userId + "/follow",
    success: function () {

    },
  });
};

module.exports = FollowToggle;

})();
