/*
 Задача 4. Програма: автосалон

Напишете програма с елементарен графичен интерфейс за обслужване на автосалон. Необходима е структура от данни, която описва всички коли и техните характеристики: марка, модел, гориво, брой врати, година на производство, цена. Създайте:

Функция за търсене по една от характеристиките
Функция за едновременно търсене по няколко характеристики
Функция за добавяне на нова кола
Функция за покупка на нова кола
 */

 var cars = [];
 var listOfCars;
// Application Constructor
function init() {
  cars = [];
    this.bindEvents();
	if(JSON.parse(localStorage.getItem("cars")) != 'undefined'){
		cars = JSON.parse(localStorage.getItem("cars"));
	}
    loadData();
}
// Bind Event Listeners
//
// Bind any events that are required on startup. Common events are:
// 'load', 'deviceready', 'offline', and 'online'.
function bindEvents() {
	document.getElementById('buttonAdd').onclick = add;

}
// deviceready Event Handler
//
// The scope of 'this' is the event. In order to call the 'receivedEvent'
// function, we must explicitly call 'app.receivedEvent(...);'
/*
function OnDeviceReady() {
    loadData();
}
*/
function add(){
  var car = {
    id:document.getElementById('id').value,
    brand:document.getElementById('brand').value,
    model:document.getElementById('model').value,
    fuel:document.getElementById('fuel').value,
    doors:document.getElementById('doors').value,
    year:document.getElementById('year').value,
    price:document.getElementById('price').value
  };
  if(cars == null){
    cars = [];
  }
  cars.push(car);
  saveData();
}
//Show data on the screen
function loadData() {
  if(cars != null){
    listOfCars = "Списък на автомобилите: <br />";
    for(var i = 0; i< cars.length; i++){
      listOfCars += "<br />" + cars[i].id + "<br />";
      listOfCars += cars[i].brand + "<br />";
      listOfCars += cars[i].model + "<br />";
      listOfCars += cars[i].fuel + "<br />";
      listOfCars += cars[i].doors + "<br />";
      listOfCars += cars[i].year + "<br />";
      listOfCars += cars[i].price + "<br /><br />===================<br />";
    }

    document.getElementById('listOfCars').innerHTML = listOfCars;
  }
}

// Handle button click
function saveData() {
  // Save array to local storage
  localStorage.setItem('cars', JSON.stringify(cars));
  loadData();
}
