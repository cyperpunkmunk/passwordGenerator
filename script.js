// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(){
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var generatedPassword = '';
  
   function generatePassword(){    
    var havNum = window.promt('do you want numbers');
    var caps = window.prompt('do you want all caps?');
    if(havNum == true){
      function getRandomInt(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      generatedPassword = getRandomInt(0,9)
      generatedPassword.toString()
    }
    
    else if(caps == true){
      generatedPassword.toUpperCase();
    }
  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
