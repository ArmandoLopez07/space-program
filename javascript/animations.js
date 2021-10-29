"use strict";
// animaciones para disenio de menu responsive
$(document).ready(function () {
  var activa = $(".menu-btn");
  var menu = $(".menu");
  var flag = false;

  $(activa).click(function () {
    if (flag == false) {
      menu.css("width", "100%");
      $(".menu-list").css("display", "flex");
      activa.css("background-image", "url('../assets/shared/icon-close.svg')");
      flag = true;
    } else {
      menu.css("width", "0");
      activa.css(
        "background-image",
        "url('../assets/shared/icon-hamburger.svg')"
      );
      $(".menu-list").css("display", "none");
      flag = false;
    }
  });
});
