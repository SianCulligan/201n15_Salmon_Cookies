'use strict';


// function render (location, id) {
//     for(var i=0; i < stores.hours.length;i++) {
//         var area = location;
//         var hour = stores.hours[i];
//         var listId = id;
//         var howManyCookies = area.numbOfCookiesSoldEachHour[i];
//         var liEl = document.createElement('li');
//         liEl.textContent = `${hour} : ${howManyCookies} cookies`;
//         listId.appendChild(liEl);
//         console.log(`loop string?`, liEl)
//     }
// var listTotal = document.createElement('li');
//     listTotal.textContent = `total: ${area.totalCookiesSoldPerDay} cookies`;
//     listId.appendChild(listTotal);


// //create the element
// var storeListEl = document.getElementById('storeList');
// var allStoresArr = [];

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

// //TODO: constructor for store info

// function Store (storeName, minCust, maxCust, averageCookiesPerCust) {
//   this.storeName = storeName;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.averageCookiesPerCust = averageCookiesPerCust;
//   this.totalCookiesSoldPerDay = 0;
//   this.numbOfCustPerHourArr = [];
//   this.numbOfCookiesSoldEachHourArr = [];

//   allStoresArr.push(this);
// }
// Store.prototype.calcNumbOfCustPerHour = function () {
//   for (var i = 0; i < hours.length; i++) {
//     var cust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//     this.numbOfCustPerHour.push(cust);
// }
// };

// Store.prototype.calcNumbOfCookiesSoldEachHour = function () {
//   this.calcNumbOfCustPerHour();
//     console.log(this.numbOfCustPerHour);
//       var cookiesPerHour = 0;
//     for (var i = 0; i < this.numbOfCustPerHour.length; i++) {
//         cookiesPerHour = Math.ceil(this.numbOfCustPerHour[i] * this.averageCookiesPerCust);
//       console.log(cookiesPerHour);
//       this.numbOfCookiesSoldEachHour.push(cookiesPerHour);
//       this.totalCookiesSoldPerDay += cookiesPerHour;
//     }
//     };


//     Store.prototype.render = function () {
//       var trEl = document.createElement('tr');
//       storeListEl.appendChild(trEl);

//       var tdEl = document.createElement('td');
//       tdEl.textContent = this.storeName;
//       trEl.appendChild(tdEl);
//     };

//     new Store('1st & Pike', 23, 65, 6.3);
//     new Store('SeaTac Airport', 3, 24, 1.2);
//     new Store('1st & Pike', 7, 65, 6.3);
//     new Store('1st & Pike', 23, 65, 6.3);
//     new Store('1st & Pike', 23, 65, 6.3);


// function renderHeader(){
//     var trEl = document.createElement('td');
//     storeListEl.
// }

// Stores.prototype.render = function(){


// var thEl = document.createElement('th');
// thEl.textContent = this.hours;
// trEl.appendChild(thEl);

// var tdEl = document.createElement('td');
// tdEl.textContent = this.storeName;
// trEl.appendChild(tdEl);

// var tdEl = document.createElement('td');
// tdEl.textContent = this.minCust;
// trEl.appendChild(tdEl);

// var tdEl = document.createElement('td');
// tdEl.textContent = this.maxCust;
// trEl.appendChild(tdEl);

// var tdEl = document.createElement('td');
// tdEl.textContent = this.averageCookiesPerCust;
// trEl.appendChild(tdEl);
// }
// var firstPikeLocation = {
//     storeName: '1st and Pike',
//     minCust: 23,
//     maxCust: 65,
//     averageCookiesPerCust: 6.3,
//     totalCookiesSoldPerDay: 0,
//     numbOfCustPerHour: [],
//     numbOfCookiesSoldEachHour: [],
//     calcNumbOfCustPerHour: function(){
//         //for loop, each hour is a new random number Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + min; push answer into an this.numbOfCustPerHour:array
//         for(var i = 0; i < stores.hours.length; i++) {
//             var cust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//             this.numbOfCustPerHour.push(cust);
//             }
//         },
//     calcNumbOfCookiesSoldEachHour: function (){
//         this.calcNumbOfCustPerHour();
//         console.log(this.numbOfCustPerHour);
//         var cookiesPerHour = 0;
//         //for loop to multiply each item in array by numbOfCustPerHour x averageCookiesPerCust, answer then pushed into numbOfCookiesSoldEachHour: array
//         for(var i = 0; i < this.numbOfCustPerHour.length; i++) {
//             cookiesPerHour = Math.ceil(this.numbOfCustPerHour[i] * this.averageCookiesPerCust);
//             console.log(cookiesPerHour);
//             this.numbOfCookiesSoldEachHour.push(cookiesPerHour);
//             this.totalCookiesSoldPerDay += cookiesPerHour;
//         }
//     },
// };


// var seaTacLocation = {
//     storeName: 'SeaTac Airport',
//     minCust: 3,
//     maxCust: 24,
//     averageCookiesPerCust: 1.2,
//     totalCookiesSoldPerDay: 0,
//     numbOfCustPerHour: [],
//     numbOfCookiesSoldEachHour: [],
//     calcNumbOfCustPerHour: function(){
//         //for loop, each hour is a new random number Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + min; push answer into an this.numbOfCustPerHour:array
//         for(var i = 0; i < stores.hours.length; i++) {
//             var cust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//             this.numbOfCustPerHour.push(cust);
//         }
//     },
//     calcNumbOfCookiesSoldEachHour: function (){
//     this.calcNumbOfCustPerHour();
//     console.log(this.numbOfCustPerHour);
//     var cookiesPerHour = 0;
//         //for loop to multiply each item in array by numbOfCustPerHour x averageCookiesPerCust, answer then pushed into numbOfCookiesSoldEachHour: array
//         for(var i = 0; i < this.numbOfCustPerHour.length; i++) {
//             cookiesPerHour = Math.ceil(this.numbOfCustPerHour[i] * this.averageCookiesPerCust);
//             console.log(cookiesPerHour);
//             this.numbOfCookiesSoldEachHour.push(cookiesPerHour);
//             this.totalCookiesSoldPerDay += cookiesPerHour;
//     }
// },
// };


// var seaCenterLocation = {
//     storeName: 'Seattle Center',
//     minCust: 11,
//     maxCust: 38,
//     averageCookiesPerCust: 1.2,
//     totalCookiesSoldPerDay: 0,
//     numbOfCustPerHour: [],
//     numbOfCookiesSoldEachHour: [],
//     calcNumbOfCustPerHour: function(){
//         //for loop, each hour is a new random number Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + min; push answer into an this.numbOfCustPerHour:array
//         for(var i = 0; i < stores.hours.length; i++) {
//             var cust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//             this.numbOfCustPerHour.push(cust);
//         }
//     },
//     calcNumbOfCookiesSoldEachHour: function (){
//         this.calcNumbOfCustPerHour();
//         console.log(this.numbOfCustPerHour);
//         var cookiesPerHour = 0;
//         //for loop to multiply each item in array by numbOfCustPerHour x averageCookiesPerCust, answer then pushed into numbOfCookiesSoldEachHour: array
//         for(var i = 0; i < this.numbOfCustPerHour.length; i++) {
//             cookiesPerHour = Math.ceil(this.numbOfCustPerHour[i] * this.averageCookiesPerCust);
//             console.log(cookiesPerHour);
//             this.numbOfCookiesSoldEachHour.push(cookiesPerHour);
//             this.totalCookiesSoldPerDay += cookiesPerHour;
//     }
// },
// };


// var capitolHillLocation = {
//     storeName:'Capitol Hill',
//     minCust: 3,
//     maxCust: 24,
//     averageCookiesPerCust: 1.2,
//     totalCookiesSoldPerDay: 0,
//     numbOfCustPerHour: [],
//     numbOfCookiesSoldEachHour: [],
//     calcNumbOfCustPerHour: function(){
//         //for loop, each hour is a new random number Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + min; push answer into an this.numbOfCustPerHour:array
//         for(var i = 0; i < stores.hours.length; i++) {
//             var cust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//             this.numbOfCustPerHour.push(cust);
//         }
//     },
//     calcNumbOfCookiesSoldEachHour: function (){
//         this.calcNumbOfCustPerHour();
//         console.log(this.numbOfCustPerHour);
//         var cookiesPerHour = 0;
//         //for loop to multiply each item in array by numbOfCustPerHour x averageCookiesPerCust, answer then pushed into numbOfCookiesSoldEachHour: array
//         for(var i = 0; i < this.numbOfCustPerHour.length; i++) {
//             cookiesPerHour = Math.ceil(this.numbOfCustPerHour[i] * this.averageCookiesPerCust);
//             console.log(cookiesPerHour);
//             this.numbOfCookiesSoldEachHour.push(cookiesPerHour);
//             this.totalCookiesSoldPerDay += cookiesPerHour;
//     }
// },
// };


// var alkiLocation = {
//     storeName: 'Alki',
//     minCust: 3,
//     maxCust: 24,
//     averageCookiesPerCust: 1.2,
//     totalCookiesSoldPerDay: 0,
//     numbOfCustPerHour: [],
//     numbOfCookiesSoldEachHour: [],
//     calcNumbOfCustPerHour: function(){
//         //for loop, each hour is a new random number Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + min; push answer into an this.numbOfCustPerHour:array
//         for(var i = 0; i < stores.hours.length; i++) {
//             var cust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//             this.numbOfCustPerHour.push(cust);
//             }
//         },
//     calcNumbOfCookiesSoldEachHour: function (){
//         this.calcNumbOfCustPerHour();
//         console.log(this.numbOfCustPerHour);
//         var cookiesPerHour = 0;
//         //for loop to multiply each item in array by numbOfCustPerHour x averageCookiesPerCust, answer then pushed into numbOfCookiesSoldEachHour: array
//         for(var i = 0; i < this.numbOfCustPerHour.length; i++) {
//             cookiesPerHour = Math.ceil(this.numbOfCustPerHour[i] * this.averageCookiesPerCust);
//             console.log(cookiesPerHour);
//             this.numbOfCookiesSoldEachHour.push(cookiesPerHour);
//             this.totalCookiesSoldPerDay += cookiesPerHour;
//             }
//         },
//     };


// firstPikeLocation.calcNumbOfCookiesSoldEachHour();
// seaTacLocation.calcNumbOfCookiesSoldEachHour();
// seaCenterLocation.calcNumbOfCookiesSoldEachHour();
// capitolHillLocation.calcNumbOfCookiesSoldEachHour();
// alkiLocation.calcNumbOfCookiesSoldEachHour();



// render (firstPikeLocation, firstPikeId);
// render (seaTacLocation, seaTacId);
// render (seaCenterLocation, seaCenterId);
// render (capitolHillLocation, capitolHillId);
// render (alkiLocation, alkiId);




// we want to render the same table in the HTML but in JS

var tableEl = document.getElementById('storeList');
var allStoresArr = [];

// constructor for pet
function Store(storeName, minCust, maxCust, averageCookiesPerCust){
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageCookiesPerCust = averageCookiesPerCust;
  this.totalCookiesSoldPerDay = 0;
  this.numbOfCustPerHourArr = [];
  this.numbOfCookiesSoldEachHourArr = [];

  Store.prototype.calcNumbOfCustPerHour = function () {
    for (var i = 0; i < hours.length; i++) {
      var cust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      this.numbOfCustPerHourArr.push(cust);
    }
  };

  Store.prototype.calcNumbOfCookiesSoldEachHour = function () {
    this.calcNumbOfCustPerHour();
    console.log(this.numbOfCustPerHourArr);
    var cookiesPerHour = 0;
    for (var i = 0; i < this.numbOfCustPerHourArr.length; i++) {
      cookiesPerHour = Math.ceil(this.numbOfCustPerHourArr[i] * this.averageCookiesPerCust);
      console.log(cookiesPerHour);
      this.numbOfCookiesSoldEachHourArr.push(cookiesPerHour);
      this.totalCookiesSoldPerDay += cookiesPerHour;
    }
  };

  //this.calcNumbOfCookiesSoldEachHour();

  allStoresArr.push(this);
}

Store.prototype.render = function(){
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);


  //nested loop - 1st loop loops stores second loop loops hourly number



  var tdEl = document.createElement('td');
  tdEl.textContent = this.maxCust;
  trEl.appendChild(tdEl);

  var tdEl = document.createElement('td');
  tdEl.textContent = this.averageCookiesPerCust;
  trEl.appendChild(tdEl);
};

new Store('1st & Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 7, 65, 6.3);
new Store('Capitol Hill', 23, 65, 6.3);
new Store('Alki', 23, 65, 6.3);

function renderHeader(){
  var thEl = document.createElement('th');
  tableEl.appendChild(thEl);

  var tdEl = document.createElement('td');
  tdEl.textContent = 'Location';
  thEl.appendChild(tdEl);

  for(var i = 0; i < hours.length; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = hours[i];
    thEl.appendChild(tdEl);
  }
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Daily Location Total';
  thEl.appendChild(tdEl);
}

renderHeader();
for(var i = 0; i < allStoresArr.length; i++){
  allStoresArr[i].render();
}

function renderRows(){
  for(var i = 0; i <allStoresArr.length; i++){
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    var tdEl = document.createElement('td');
    tdEl.textContent = this.storeName;
    trEl.appendChild(tdEl);

    for(var i = 0; i < this.calcNumbOfCookiesSoldEachHourArr.length; i++){
      var tdEl = document.createElement('td');
      tdEl.textContent = this.numbOfCookiesSoldEachHourArr[i];
      trEl.appendChild(tdEl);
    }

    var tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesSoldPerDay;
    trEl.appendChild(tdEl);
  }

  renderRows();


  
}
