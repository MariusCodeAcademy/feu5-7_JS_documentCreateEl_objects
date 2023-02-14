'use strict';
console.log('main.js file was loaded');

// nusitaikymai
const appContainer = document.getElementById('app');

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

appContainer.append(h2El);

// sukurti paragrapha
// ideti teksta "as esu nauja p elementas"
// patalpinti i document.getElementById('app')

const pEl = document.createElement('p');
pEl.textContent = 'as esu nauja p elementas';
appContainer.append(pEl);

// ta pacia eiga, sukurti
// 1. mygtuka kuris sako 'spausti cia' ir patalpinti i ta pati konteineri
const btnEl = document.createElement('button');
btnEl.textContent = 'spausti cia';
appContainer.append(btnEl);

function newEl(tagName, tagText) {
  const newElement = document.createElement(tagName);
  newElement.textContent = tagText;
  appContainer.append(newElement);
}
// 2. h3 elementa su tekstu 'nauja antraste' ir patalpinti i ta pati konteineri
newEl('h3', 'nauja antraste');

newEl('button', 'more info');
