'use strict';
console.log('list.js file was loaded');

// nusitaikymai
const appContainer = document.getElementById('app');

// HELPER FUNCTIONS LIST =========================
function crElement(tagName, tagText = '') {
  // -- sukuriam li
  const newEl = document.createElement(tagName);

  // -- pridedam text
  newEl.textContent = tagText;
  return newEl;
}
// HELPER FUNCTIONS LIST END =========================

const shopingList = ['milk', 'crosaint', 'snikers', 'lemonade'];

/* 
<ul>
  <li>milk</li>
  <li>crosaint</li>
  ...
</ul>
*/

// sukuriam ul

const ulEl = crElement('ol');

// sukam cikla
for (let i = 0; i < shopingList.length; i++) {
  let oneShoppingItemValue = shopingList[i];

  // // -- sukuriam li
  // const liEl = document.createElement('li');
  // // -- pridedam text
  // liEl.textContent = oneShoppingItemValue;
  const liEl = crElement('li', oneShoppingItemValue);
  // -- patalpinam i ulEl
  ulEl.append(liEl);
}

// patalpinam ulEl i appContainer
appContainer.append(ulEl);

// sukurti div ir viduje paragrafa su mygtuku
const divEl = crElement('div');
const pEl = crElement('p', 'Sveiki sveiki');
const btnEl = crElement('button', 'nespausti cia');
divEl.append(pEl, btnEl);

// patalpinam divEl i appContainer
appContainer.append(divEl);
