
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*()_+-=";

  var length = parseInt(prompt("Enter password length (must be between 8 and 128 characters):"));
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return "";
  }

  var useLowercase = confirm("Do you want to use lowercase characters?");
  var useUppercase = confirm("Do you want to use uppercase characters?");
  var useNumbers = confirm("Do you want to use numbers?");
  var useSymbols = confirm("Do you want to Use symbols?");

  if (!useLowercase && !useUppercase && !useNumbers && !useSymbols) {
    alert("You must select at least one type of character to generate a password.");
    return "";
  }

  var charset = "";
  if (useLowercase) {
    charset += lowercase;
  }
  if (useUppercase) {
    charset += uppercase;
  }
  if (useNumbers) {
    charset += numbers;
  }
  if (useSymbols) {
    charset += symbols;
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

// Used some help from previous activites and online resources to complete this assignment.