  ymaps.ready(function () {

      var myMap = new ymaps.Map('map', {
              center: [59.93876253434414, 30.323146496150137],
              zoom: 19
          }, {
              searchControlProvider: 'yandex#search'
          }),

          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),

          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'Собственный значок метки',
              balloonContent: 'Это красивая метка'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: 'img/map-marker.png',
              // Размеры метки.
              iconImageSize: [231, 190],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              //            iconImageOffset: [-5, -38]
          }),

          myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
              hintContent: 'Собственный значок метки с контентом',
              balloonContent: 'А эта — новогодняя',
              iconContent: '12'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#imageWithContent',
              // Своё изображение иконки метки.
              iconImageHref: 'images/ball.png',
              // Размеры метки.
              iconImageSize: [48, 48],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              //            iconImageOffset: [-24, -24],
              // Смещение слоя с содержимым относительно слоя с картинкой.
              iconContentOffset: [231, 190],
              // Макет содержимого.
              iconContentLayout: MyIconContentLayout
          });

      myMap.controls.remove('zoomControl');

      myMap.geoObjects
          .add(myPlacemark)
          .add(myPlacemarkWithContent);
  });



  var btn = document.querySelector(".write-btn");
  var popup = document.querySelector(".popup-login")
  var popupClose = document.querySelector(".popup-close")

  btn.addEventListener("click", function () {
      popup.classList.toggle("popup-show");
  });

  popupClose.addEventListener("click", function () {
      popup.classList.remove("popup-show");
  });

  var closeInfo = document.querySelector(".popup-close-info");

  var showInfo1 = document.querySelector(".site-sedona")
  var showInfo2 = document.querySelector(".site-pink")
  var showInfo3 = document.querySelector(".site-barbershop")
  var showInfo4 = document.querySelector(".site-mishka")
  var showInfo5 = document.querySelector(".site-aplus")
  var showInfo6 = document.querySelector(".site-kvast");

  var inf1 = document.querySelector(".info-site-sedona");
  var inf2 = document.querySelector(".info-site-pink");
  var inf3 = document.querySelector(".info-site-barbershop");
  var inf4 = document.querySelector(".info-site-mishka");
  var inf5 = document.querySelector(".info-site-aplus");
  var inf6 = document.querySelector(".info-site-kvas");

  var infoClose = document.querySelector(".popup-close-info");


  showInfo1.addEventListener("click", function () {
      inf1.classList.toggle("info-site");
  });

  showInfo2.addEventListener("click", function () {
      inf2.classList.toggle("info-site");
  });


  showInfo3.addEventListener("click", function () {
      inf3.classList.toggle("info-site");
  });

  showInfo4.addEventListener("click", function () {
      inf4.classList.toggle("info-site");
  });

  showInfo5.addEventListener("click", function () {
      inf5.classList.toggle("info-site");
  });

  showInfo6.addEventListener("click", function () {
      inf6.classList.toggle("info-site");
  });
