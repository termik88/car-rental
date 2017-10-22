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

/*Модальное окно выбор размера*/
var linkIndex = document.querySelector('.hit__button');
var popup = document.querySelector('.modal');
var wrapper = document.querySelector('.modal-wrapper');
var linkCatalog = document.querySelectorAll('.order__modal-link');

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

if(linkCatalog != null) {
  [].forEach.call(linkCatalog, function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      popup.classList.add('modal-show');
      wrapper.classList.add('modal-wrapper-show');
    });
  });
};

if(linkIndex != null) {
  linkIndex.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.add('modal-show');
    wrapper.classList.add('modal-wrapper-show');
  });
};

/*Кнопка в хедаре*/
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
