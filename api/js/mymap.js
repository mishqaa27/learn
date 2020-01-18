ymaps.ready(init);

function init() {
  let myMap = new ymaps.Map(
    "map", {
    center: [56.877021, 53.3001572], // добавление api map
    zoom: 12
  }, {
    searchControlProvider: "yandex#search"
  }
  );
  var placemark = new ymaps.Placemark(
    [56.87290005, 53.30170811], //  добавление метки на карту
    {
      balloonContent: "Питьсбург 24 часа", // при клике на метку
      hintContent: "Питьсбург" // при наведении на метку
    }
  );
  myMap.geoObjects.add(placemark);
  var placemark = new ymaps.Placemark([56.86843957, 53.30220042], {
    hintContent: "<strong>Мой дом</strong>"
  });
  myMap.geoObjects.add(placemark);
  let form = document.createElement('mark');

  myMap.events.add(function (form) {
    myMap.geoObjects.add(placemark);


  });

  // var targetElement = document.getElementById("Map"),
  //   events = "click",
  //   divListernes = ymaps.domEvent.manager     
  //     .group(targetElement)
  //     .add(events, function(event) {
  //       log(event.get("type"));
  //     });

  // myMap.events.add ('click', function(e){
  //   // Получение координат щелчка
  //   var coords = e.get('coords');
  //   alert(coords.join(', '));
  // });

  // // клик по карте
  // myMap.events.add('click', function(check) {
  //   var coords = check.get("coords");
  //   // если метка уже создана - просто передвигаем ее.
  //   if (myPlacemark) {
  //     myPlacemark.geometry.setCoordinates(coords);
  //     // Если нет - создаем.
  //   } else {
  //     myPlacemark = createPlacemark(coords);
  //     myMap.geoObjects.add(myPlacemark);
  //     // создаем событие окончания перетаскивания на метке
  //     myPlacemark.events.add("dragend", function() {
  //       getAddress(myPlacemark.geometry.getCoordinates());
  //     });
  //   }
  //   getAddress(coords);
  // });
  // // создание метки
  // function createPlacemark(coords) {
  //   return new ymaps.Placemark(
  //     coords,
  //     {
  //       iconCaption: "поиск"
  //     },
  //     {
  //       preset: "islands#violetDotIconWithCaption",
  //       draggable: true
  //     }
  //   );
  // }
  // function getAddress(coords) {
  //   myPlacemark.properties.set('iconCaption', 'поиск');
  //   ymaps.geocode(coords).then(function (res){
  //     var firstGeoObject = res.geoObjects.get(0);
  //     myPlacemark.properties
  //     .set({
  //       // формируем строку с данными об объекте.
  //       iconCaption: [
  //         // Название населенного пункта или вышестоящее административно-территориальное образование.
  //         firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
  //         // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
  //         firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
  //     ].filter(Boolean).join(', '),
  //     // В качестве контента балуна задаем строку с адресом объекта.
  //     balloonContent: firstGeoObject.getAddressLine()

  //     });
  //   });
  // }
}