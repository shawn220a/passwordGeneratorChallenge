const generate = document.querySelector('#generatePassword');
const finalPassword = document.querySelector('#generatedPassword');
const clearPassword = document.querySelector('#clearPassword');
const copyPassword = document.querySelector('#copyPassword');

generate.addEventListener('click', generatePassword);
clearPassword.addEventListener('click', clearTextArea);
copyPassword.addEventListener('click', copyTextArea);

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

function userInput() {
  let password = [];

  let lower = confirm('Do you want lower case characters in your password');
  let upper = confirm('Do you want upper case characters in your password');
  let number = confirm('Do you want number characters in your password');
  let special = confirm('Do you want special case characters in your password');

  if (lower === true) {
    for (x of lowerCaseChar) {
      password.push(x);
    }
  }
  if (upper === true) {
    for (x of upperCaseChar) {
      password.push(x);
    }
  }
  if (number === true) {
    for (x of numberChar) {
      password.push(x);
    }
  }
  if (special === true) {
    for (x of specialChar) {
      password.push(x);
    }
  }

  return password;
}

function randomizePassword(passLength, password) {
  let passwordChars = [];
  let passwordText = '';

  for (let count = 0; count < passLength; count++) {
    let passwordChoiceIndex = Math.floor(Math.random() * password.length);
    let passwordChar = password[passwordChoiceIndex];
    passwordChars.push(passwordChar);
  }

  for (x of passwordChars) {
    passwordText += x;
  }

  return passwordText;
}

function generatePassword() {
  let passwordText = '';

  let passLength = prompt('How long do you want the password');

  if (passLength < 8) {
    alert('Password length must be at least 8 characters');
  }
  if (passLength > 128) {
    alert('Password length must be under 128 characters');
  }
  if (passLength >= 8 && passLength <= 128) {
    let password = userInput();
    passwordText = randomizePassword(passLength, password);
  }

  writePassword(passwordText);
}

function writePassword(passwordText) {
  finalPassword.value = passwordText;
}

function clearTextArea() {
  finalPassword.value = '';
  clearPassword = finalPassword.value;
}

function copyTextArea() {
  finalPassword.select();

  document.execCommand('copy');

  alert(`Copied the text: ${finalPassword.value}`);
}
