// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowerChar = 'abcdefghijklmnopqrstuvwxyz';
  let numbers = '1234567890'
  let special = "\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~";
  let generatedPassword = '';
  let wantedChar = '';
  
  let includeUpper = confirm(`Would you like uppercase characters in your password?`);
  if (includeUpper) {
    wantedChar = wantedChar + upperChar;
  }
  let includeLower = confirm(`would you like lowercase characters in your password?`);
  if (includeLower) {
    wantedChar = wantedChar + lowerChar;
  }
  let includeSpecial = confirm(`Would you like special characters in your password?`);
  if (includeSpecial) {
    wantedChar = wantedChar + special;
  }
  let includeNum = confirm(`Would you like numbers in your password?`);
  if (includeNum){
    wantedChar = wantedChar + numbers;
  }
  if ((!includeUpper) && (!includeLower) && (!includeSpecial) && (!includeNum)) {
    alert(`You need to include at least one type of character!`);
    generatePassword();
  }
  let passwordLength = prompt(`How many characters would you like to include in your password? (Must be between 8 and 128 characters)`)
  
  if ((parseInt(passwordLength) < 8) || (parseInt(passwordLength) > 128) || (!parseInt(passwordLength))) {
    alert(`Your password needs to be a NUMBER between 8 and 128!`)
    return '';
  }
  for(let i = 0; i < parseInt(passwordLength); i++){
    let randomChar = wantedChar[Math.floor(Math.random()*wantedChar.length)];generatedPassword = generatedPassword + randomChar;
  }
return generatedPassword;
}

