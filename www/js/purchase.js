/*
 Задача 4. Програма: автосалон

Напишете програма с елементарен графичен интерфейс за обслужване на автосалон. Необходима е структура от данни, която описва всички коли и техните характеристики: марка, модел, гориво, брой врати, година на производство, цена. Създайте:

Функция за търсене по една от характеристиките
Функция за едновременно търсене по няколко характеристики
Функция за добавяне на нова кола
Функция за покупка на нова кола
 */
var cars = new Array();
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        app.loadData();
    },
	onDeviceReady: function() {
        this.bindEvents();
		alert("device is ready");
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.getElementById('buttonBuy').onclick = this.purchase;

    },

    purchase: function(){
      var id = document.getElementById('id').value;
      searchResults = [];
      for(var i = 0; i < cars.length; i++){
        if(id == cars[i].id){
          cars.splice(i,1);
        }
      }
      app.saveData();
    },


    loadData: function() {
      cars = JSON.parse(localStorage.getItem("cars"));
      var searchResultsText = "Списък на автомобилите: <br />";
      for(var i = 0; i< cars.length; i++){
        searchResultsText += "<br />" + cars[i].id + "<br />";
        searchResultsText += cars[i].brand + "<br />";
        searchResultsText += cars[i].model + "<br />";
        searchResultsText += cars[i].fuel + "<br />";
        searchResultsText += cars[i].doors + "<br />";
        searchResultsText += cars[i].year + "<br />";
        searchResultsText += cars[i].price + "<br /><br />===================<br />";
      }

      document.getElementById('searchResults').innerHTML = searchResultsText;
    },
    saveData: function(){
      // Save array to local storage
      localStorage.setItem('cars', JSON.stringify(cars));
      app.loadData();
    }
};

app.initialize();
