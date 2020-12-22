const generate = document.querySelector('#generatePassword');
const finalPassword = document.querySelector('#generatedPassword');
let clearPassword = document.querySelector('#clearPassword');
const copyPassword = document.querySelector('#copyPassword');

const passLength = document.querySelector('#passwordLength');
// Check box elements
let lower = document.querySelector('#lower');
let upper = document.querySelector('#upper');
let number = document.querySelector('#number');
let special = document.querySelector('#special');

const lowerCaseChar = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
const upperCaseChar = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
const numberChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const specialChar = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '"',
  "'",
  '+',
  ',',
  '-',
  '.',
  '/',
  ':',
  ';',
  '<',
  '>',
  '=',
  '?',
  '[',
  ']',
  '\\',
  '_',
  '`',
  '{',
  '}',
  '|',
  '~',
  ' ',
];

const userInput = () => {
  let password = [];

  if (lower.checked === true) for (x of lowerCaseChar) password.push(x);

  if (upper.checked === true) for (x of upperCaseChar) password.push(x);

  if (number.checked === true) for (x of numberChar) password.push(x);

  if (special.checked === true) for (x of specialChar) password.push(x);

  return password;
};

const randomizePassword = (passLength, password) => {
  let passwordChars = [];
  let passwordText = '';

  for (let count = 0; count < passLength; count++) {
    let passwordChoiceIndex = Math.floor(Math.random() * password.length);
    let passwordChar = password[passwordChoiceIndex];
    passwordChars.push(passwordChar);
  }

  for (x of passwordChars) passwordText += x;

  return passwordText;
};

const generatePassword = () => {
  let passwordText = '';

  if (passLength.value < 8) alert('Password length must be at least 8 characters');
  if (passLength.value > 128) alert('Password length must be under 128 characters');

  if (passLength.value >= 8 && passLength.value <= 128) {
    let password = userInput();
    passwordText = randomizePassword(passLength.value, password);
  }

  writePassword(passwordText);
};

const writePassword = (passwordText) => (finalPassword.value = passwordText);

const clearTextArea = () => {
  finalPassword.value = '';
  clearPassword = finalPassword.value;
};

const copyTextArea = () => {
  finalPassword.select();

  document.execCommand('copy');

  alert(`Copied the text: ${finalPassword.value}`);
};

generate.addEventListener('click', generatePassword);
clearPassword.addEventListener('click', clearTextArea);
copyPassword.addEventListener('click', copyTextArea);
