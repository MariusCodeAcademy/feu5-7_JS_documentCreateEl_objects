'use strict';
console.log('uzd.js file was loaded');

// nusitaikymai
const appContainer = document.getElementById('app');

// HELPER FUNCTIONS LIST =========================

/**
 * A helper funcion for faster element creation
 * @param {string} tagName
 * @param {string} tagText
 * @returns HTMLElement
 */
function crElement(tagName, tagText = '') {
  // -- sukuriam li
  const newEl = document.createElement(tagName);

  // -- pridedam text
  newEl.textContent = tagText;
  return newEl;
}
// HELPER FUNCTIONS LIST END =========================

const sectionEl = crElement('section');
const h2El = crElement('h2', 'Section title');
const pEl = crElement('p', 'Hello i am section text');

sectionEl.append(h2El, pEl);

appContainer.append(sectionEl);

// 3. sukurti masyva is visu savaites dienu lietuviskai. sugeneruoti rikuota sarasa is sukurto masyvo.

const dayz = [
  'pirmadienis',
  'antradienis',
  'treciadienis',
  'ketvirtadienis',
  'penktadienis',
  'savaitgalis',
];

function arrayToList(arr) {
  const listEl = crElement('ul');
  for (let i = 0; i < arr.length; i++) {
    let dayValue = arr[i];
    // sukuriam dienos elementa su pavadinimu
    const dayLi = crElement('li', dayValue);
    // talpiname sarase
    listEl.append(dayLi);
  }
  appContainer.append(listEl);
}

arrayToList(dayz);
