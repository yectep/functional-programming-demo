const assert = require('assert').strict;

String.prototype.ucfirst = function() {
  return this.split(' ')
    .map((word) => (word.charAt(0) !== '(') ? word.charAt(0).toUpperCase() + word.substring(1) : word)
    .join(' ');
};

const list = ['delta', '(EVA) EVA Airways', '(CPA) Cathay Pacific', 'American',
  '(BAW) British Airways', '(JBU) JetBlue', '(KAL) Korean Air', 'EgyptAir',
  '(DLH) Lufthansa', '(NKS) Spirit Airlines', 'Hainan Airlines', 's7 airlines'
];

const icaoRegex = /^\([a-z]{3}\)/i;

// Do not edit above this line.

// Temporary array to hold positions
const mapped = list.map((element, index) => {
  // TODO: Properly prepare airline name for sorting:
  //  - Remove ICAO codes
  //  - Trim both ends
});

mapped.sort((a, b) => {
  // TODO: Sort in alphabetic order
});

// Return sorted elements in the original list
const result = mapped.map((element) => {
  // TODO:
  //  - Return ORIGINAL STRING as in list, but sorted without ICAO code.
});

// Do not edit below this line.

console.log('Exercise 4: Daisy-chained .map() and .sort()', result);

assert.deepEqual(result, [
  'American',
  '(BAW) British Airways',
  '(CPA) Cathay Pacific',
  'Delta',
  'EgyptAir',
  '(EVA) EVA Airways',
  'Hainan Airlines',
  '(JBU) JetBlue',
  '(KAL) Korean Air',
  '(DLH) Lufthansa',
  'S7 Airlines',
  '(NKS) Spirit Airlines'
]);
