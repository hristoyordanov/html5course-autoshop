/*
 Задача 4. Програма: автосалон

Напишете програма с елементарен графичен интерфейс за обслужване на автосалон. Необходима е структура от данни, която описва всички коли и техните характеристики: марка, модел, гориво, брой врати, година на производство, цена. Създайте:

Функция за търсене по една от характеристиките
Функция за едновременно търсене по няколко характеристики
Функция за добавяне на нова кола
Функция за покупка на нова кола
 */
var cars = new Array();
var searchResults = new Array();
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        //cars = JSON.parse(localStorage.getItem("cars"));
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.getElementById('buttonSearch').onclick = this.search2;

    },

    search2: function(){
      cars = JSON.parse(localStorage.getItem("cars"));
      var searchTerm = document.getElementById('searchTerm').value;
      searchResults = [];
      for(var i = 0; i < cars.length; i++){
        if(document.getElementById('brand').checked && cars[i].brand.search(searchTerm) != -1){
          if($.inArray(cars[i], searchResults) == -1)
          searchResults.push(cars[i]);
        }
        if(document.getElementById('model').checked && cars[i].model.search(searchTerm) != -1){
          if($.inArray(cars[i], searchResults) == -1)
          searchResults.push(cars[i]);
        }
        if(document.getElementById('fuel').checked && cars[i].fuel.search(searchTerm) != -1){
          if($.inArray(cars[i], searchResults) == -1)
          searchResults.push(cars[i]);
        }
        if(document.getElementById('doors').checked && cars[i].doors.search(searchTerm) != -1){
          if($.inArray(cars[i], searchResults) == -1)
          searchResults.push(cars[i]);
        }
        if(document.getElementById('year').checked && cars[i].year.search(searchTerm) != -1){
          if($.inArray(cars[i], searchResults) == -1)
          searchResults.push(cars[i]);
        }
        if(document.getElementById('price').checked && cars[i].price.search(searchTerm) != -1){
          if($.inArray(cars[i], searchResults) == -1)
          searchResults.push(cars[i]);
        }
      }
      app.loadData();
    },


    loadData: function() {
      var searchResultsText = "Резултати от търсенето: <br />";
      for(var i = 0; i< searchResults.length; i++){
        searchResultsText += "<br />" + searchResults[i].brand + "<br />";
        searchResultsText += searchResults[i].model + "<br />";
        searchResultsText += searchResults[i].fuel + "<br />";
        searchResultsText += searchResults[i].doors + "<br />";
        searchResultsText += searchResults[i].year + "<br />";
        searchResultsText += searchResults[i].price + "<br /><br />===================<br />";
      }

      document.getElementById('searchResults').innerHTML = searchResultsText;
    }
};

app.initialize();
