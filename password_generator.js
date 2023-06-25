


const lengthInput = document.getElementById('length');
const lettersCheckbox = document.getElementById('Letters');
const digitsCheckbox = document.getElementById('digit');
const otherCheckbox = document.getElementById('other');
const passwordDisplay = document.querySelector('.displaytext');
const generateButton = document.querySelector('.pass');
const copyButton = document.querySelector('.copy');

function generatePassword() {
  const length = parseInt(lengthInput.value);
  const includeLetters = lettersCheckbox.checked;
  const includeDigits = digitsCheckbox.checked;
  const includeOther = otherCheckbox.checked;

  let characters = '';
  if (includeLetters) {
    characters += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (includeDigits) {
    characters += '0123456789';
  }
  if (includeOther) {
    characters += '$!@_*^&()';
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  passwordDisplay.value = password;
}

function copyPassword() {
  passwordDisplay.select();
  document.execCommand('copy');
  alert('Password copied to clipboard');
}

generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyPassword);
