'use strict';

// Create 5 Object literals

// You have starting data, and a goal of end data that includes both arrays and single values. Think about what arrays you might need and also how you will use object methods to do your calculations. Keep in mind the single responsibility principle: a function/method should do only one thing.

//  Good use of Object Literals (no constructors allowed today); one for each store model; properties/values and methods are correctly constructed and given meaningful names

// Main page meets requirements of the problem domain

// Use template literals in your JS logic to render the stores as lists on the sales page


//
// create 'stores' as an object literal and then each location can live inside 'stores'?

//function should plug in location, max, min, & avg and return a list that appends to the site. location, by hour, & total

//loop through 2 arrays (1/ number of cust per hour 2. number of cookies sold each hour), return a value each time  
//return string of time, number of cookies, 'cookies'
//after loop, append the list total
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
        
        
//create the element
var storeListEl = document.getElementById('storeList');
var allStoresArr = [];

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

//TODO: constructor for store info
function Store(storeName, minCust, maxCust, averageCookiesPerCust){
    this.storeName = storeName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.averageCookiesPerCust = averageCookiesPerCust;
    this.totalCookiesSoldPerDay = 0;
    this.numbOfCustPerHourArr = [];
    this.numbOfCookiesSoldEachHourArr = [];
    this.calcNumbOfCustPerHour = function(){
        for(var i = 0; i < hours.length; i++) {
            var cust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
            this.numbOfCustPerHour.push(cust);
            }
        };
    this.calcNumbOfCookiesSoldEachHour = function (){
        this.calcNumbOfCustPerHour();
        console.log(this.numbOfCustPerHour);
        var cookiesPerHour = 0;
        for(var i = 0; i < this.numbOfCustPerHour.length; i++) {
            cookiesPerHour = Math.ceil(this.numbOfCustPerHour[i] * this.averageCookiesPerCust);
            console.log(cookiesPerHour);
            this.numbOfCookiesSoldEachHour.push(cookiesPerHour);
            this.totalCookiesSoldPerDay += cookiesPerHour;
        }
    },   

peanut             

    allStoresArr.push(this);
}

Store.prototype.render = function(){
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    var tdEl = document.createElement('td');
    tdEl.textContent = this.storeName;
    trEl.appendChild(tdEl);

}

new Store ('1st & Pike', 23, 65, 6.3);
new Store ('SeaTac Airport', 3, 24, 1.2);
new Store ('1st & Pike', 7, 65, 6.3);
new Store ('1st & Pike', 23, 65, 6.3);
new Store ('1st & Pike', 23, 65, 6.3);

function renderHeader(){
    var trEl = document.createElement('td');
    storeEl.
}

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