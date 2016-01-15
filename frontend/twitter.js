var FollowToggle = require("./follow_toggle");
var UsersSearch = require("./users_search");

$(function () {
  $("button.follow-toggle").each(function (idx, el) {
    new FollowToggle(el);
    // console.log("HELLO!");
  });
  $(".users-search").each(function (idx, el) {
    new UsersSearch(el);
    // console.log("HELLO!");
  });
});
