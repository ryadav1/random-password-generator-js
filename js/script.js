// Assignment code here
function generatePassword() {


// Array of lowercase, uppercase, numeric and special characters
var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '@', '#', '$', '%', '&', "'", '(', ')', '*', '^', '?', ':', '+', ',', '-', '.', '>', '=', '<', '_', '[', ']', '{', '}', '~', '|'];

// length of password should be between 8 and 128 characters
numCharacters = prompt("Choose the length of your password. Your password should be between 8 and 128 characters.")
if (numCharacters < 8 || numCharacters > 128 ) {
  return "Your password should be between 8 and 128 characters. Please enter a valid number.";
} else if (isNaN(numCharacters) || numCharacters === "") {
  return"Please enter a valid number between 8 and 128.";
} else {
  alert("The length of your password is " + numCharacters + " characters.")
}

// ask the user whether the password should include lowercase characters
containsLowercase = confirm("Would you like the password to include lowercase characters?")

// ask the user whether the password should include uppercase characters
containsUppercase = confirm("Would you like the password to include uppercase characters?")

// ask the user whether the password should include numeric characters
containsNumeric = confirm("Would you like the password to include numeric characters?")

// ask the user whether the password should include special characters
containsSpecial = confirm("Would you like the password to include special characters?")

// to ensure that the password contains at least one character type
if (containsLowercase === false && containsUppercase === false && containsNumeric === false && containsSpecial === false) {
  return "Please make sure that you select at least one character type."
}

// possible password characters
var possibleChar = []

if (containsLowercase) {
  possibleChar = possibleChar.concat(lowerCaseCharacters);
}

if (containsUppercase) {
  possibleChar = possibleChar.concat(upperCaseCharacters);
}

if (containsNumeric) {
  possibleChar = possibleChar.concat(numericCharacters);
}

if (containsSpecial) {
  possibleChar = possibleChar.concat(containsSpecial);
}

// generate the final password

var finalPwd = []
for (var i=0; i < numCharacters; i++) {
  var index = [Math.floor(Math.random() * possibleChar.length)];
  finalPwd = finalPwd + possibleChar[index];
}
return finalPwd;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
