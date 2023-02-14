'use strict';
console.log('main.js file was loaded');

// document.createElement(tagName)

// 1. sukuriam h2 el
//
const h2El = document.createElement('h2'); // <h2></h2>
// 2 pridedam text
h2El.textContent = 'I am dynamic H2 el'; // <h2>I am dynamic H2 el</h2>
console.log(h2El);

// 3 patalpinti elementa i dom append
// parent.append(newEl)
document.body.append(h2El);

document.getElementById('app').append(h2El);
