"use strict";

$(document).ready(function () {
  console.log("ready");
  var nombre = $(".planet-name");
  var descripcion = $(".planet-desc");
  var distancia = $(".dista");
  var tiempo = $(".time");
  var imagen = $(".plan-img");

  fetch("../data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then((dati) => {
      planet(dati, 0);

      $(".muna").click(function () {
        planet(dati, 0);
      });
      $(".mara").click(function () {
        planet(dati, 1);
      });
      $(".ropa").click(function () {
        planet(dati, 2);
      });
      $(".tita").click(function () {
        planet(dati, 3);
      });
    });

  function planet(data, number) {
    imagen.attr("src", data.destinations[number].images.webp);
    nombre.html(
      JSON.stringify(data.destinations[number].name)
        .replace(/"/g, "")
        .toUpperCase()
    );
    descripcion.html(data.destinations[number].description);
    distancia.html(
      JSON.stringify(data.destinations[number].distance)
        .replace(/"/g, "")
        .toUpperCase()
    );
    tiempo.html(
      JSON.stringify(data.destinations[number].travel)
        .replace(/"/g, "")
        .toUpperCase()
    );

    switch (number) {
      case 0:
        $(".ropa").removeClass("home");
        $(".mara").removeClass("home");
        $(".tita").removeClass("home");
        $(".muna").addClass("home");
        break;
      case 1:
        $(".ropa").removeClass("home");
        $(".muna").removeClass("home");
        $(".tita").removeClass("home");
        $(".mara").addClass("home");
        break;
      case 2:
        $(".muna").removeClass("home");
        $(".mara").removeClass("home");
        $(".tita").removeClass("home");
        $(".ropa").addClass("home");
        break;
      case 3:
        $(".ropa").removeClass("home");
        $(".mara").removeClass("home");
        $(".muna").removeClass("home");
        $(".tita").addClass("home");
        break;
    }
  }
});
