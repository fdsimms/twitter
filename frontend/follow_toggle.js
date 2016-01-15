(function () {

var FollowToggle = function (el) {
  this.userId = el.userId;
  if (el.initialFollowState === true) {
    this.followState = "followed";
  } else {
    this.followState = "unfollowed";
  }
  this.$el = $(el);
};

module.exports = FollowToggle;

})();
