// Assignment code here
// Array of lowercase, uppercase, numeric and special characters
var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '@', '#', '$', '%', '&', "'", '(', ')', '*', '^', '?', ':', '+', ',', '-', '.', '>', '=', '<', '_', '[', ']', '{', '}', '~', '|'];

// length of password should be between 8 and 128 characters
numCharacters = prompt("Choose the length of your password. Your password should be between 8 and 128 characters.")
if (parseInt(numCharacters) < 8 || parseInt(numCharacters) > 128 ) {
  alert("Your password should be between 8 and 128 characters. Please enter a valid number.");
} else if (isNaN(numCharacters) || numCharacters === "") {
  alert("Please enter a valid number between 8 and 128.");
} else {
  alert("The length of your password is " + numCharacters + " characters.")
}

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
