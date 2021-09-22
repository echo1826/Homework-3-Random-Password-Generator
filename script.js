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



function generatePassword() 
{
  var passwordLength = prompt("How many characters would you like the password to be?");
  passwordLength = parseInt(passwordLength);
  
  if (passwordLength < 8)
  {
    alert("Password must be more than 8 characters long.");
  }
  else if (passwordLength > 128)
  {
    alert("Password must be more than 128 characters long.");
  }
  else if (!passwordLength)
  {
    alert("Password must be at least 8 characters to 128 characters long.");
    userConfirm = confirm("Redo or Cancel");
    if (!userConfirm)
    {
      return;
    }
  }

  var includeUpper = confirm("Should the password include uppercase characters?");
  var includeLower = confirm("Should the password include lowercase characters?");
  var includeNum = confirm("Should the password include numbers?");
  var includeSpecial = confirm("Should the password include special characters (!@#$$%) ?");

  if(!includeUpper && !includeLower && !includeNum && !includeSpecial)
  {
    alert("Please answer ok to at least one of the questions.");
    userConfirm = confirm("Redo or Cancel?");
  }

  var alphaUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var alphaLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var numericals = [0,1,2,3,4,5,6,7,8,9];
  var special = ['!' ,'@' ,'#' ,'$' ,'%' ,'^' ,'&' ,'*' , '(', ')' , '-', '_', '=', '+', '`', '~', '/' ,'?' ,'>' ,'<' , '[' ,']' , '{', '}'];

  // var userConfirm = true;
  // while(userConfirm)
  // {
    
  // }
}

//console.log(Math.floor(Math.random() * passwordLength));