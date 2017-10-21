var map;
function initMap() {
  map = new google.maps.Map(document.getElementsByClassName('map')[0], {
    zoom: 16,
    center: new google.maps.LatLng(59.938659, 30.323078),
    mapTypeId: 'roadmap'
  });

  var iconBase = 'img/';
  var icons = {
    mishka: {
      icon: iconBase + 'pin.png'
    }
  };

  var features = [
    {
      position: new google.maps.LatLng(59.93866, 30.3229),
      type: 'mishka'
    }
  ];

  // Create markers.
  features.forEach(function(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });
  });
}

/*Модальное окно выбор размера - Индекс*/
var link = document.querySelector(".hit__button", ".order__modal-link");

var popup = document.querySelector(".modal");
var wrapper = document.querySelector(".modal-wrapper");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  wrapper.classList.add("modal-wrapper-show")
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
    if (wrapper.classList.contains("modal-wrapper-show")) {
      wrapper.classList.remove("modal-wrapper-show");

    }
  }
});

/*Модальное окно выбор размера - Каталог*/
/*
var link = document.querySelector(".order__modal-link");

var popup = document.querySelector(".modal");
var wrapper = document.querySelector(".modal-wrapper");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  wrapper.classList.add("modal-wrapper-show")
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
    if (wrapper.classList.contains("modal-wrapper-show")) {
      wrapper.classList.remove("modal-wrapper-show");

    }
  }
});*/
