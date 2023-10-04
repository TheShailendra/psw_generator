const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  password += getRandomChar(upperCase);
  password += getRandomChar(lowerCase);
  password += getRandomChar(number);
  password += getRandomChar(symbol);

  while (length > password.length) {
    password += getRandomChar(allChars);
  }
  passwordBox.value = password;
}

function getRandomChar(characters) {
  return characters[Math.floor(Math.random() * characters.length)];
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}