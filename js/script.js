const generate = document.querySelector('#generatePassword');
const finalPassword = document.querySelector('#generatedPassword');

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

generate.addEventListener('click', generatePassword);

function userInput() {
  let lower = confirm('Do you want lower case characters in your password');
  let upper = confirm('Do you want upper case characters in your password');
  let number = confirm('Do you want number characters in your password');
  let special = confirm('Do you want special case characters in your password');
}

function generatePassword() {
  let passLength = prompt('How long do you want the password');

  let password = userInput();

  passwordText = 'Security is great';

  writePassword(passwordText);
}

function writePassword(passwordText) {
  finalPassword.value = passwordText;
}
