"use strict";
// animaciones para disenio de menu responsive
$(document).ready(function () {
  var burguer = $(".icon-menu1");
  var tache = $(".icon-menu2");
  var menu = $(".menu");

  burguer.click(function () {
    menu.css("right", "0");
  });
  tache.click(function () {
    menu.css("right", "-100%");
  });
});
