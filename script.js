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


//generatePassword function
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
    return;
  }
  else if (!passwordLength)
  {
    alert("Password must be at least 8 characters to 128 characters long.");
    return;
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

  const userChoices =
  {
    howLong: passwordLength,
    anyUpper: includeUpper,
    anyLower: includeLower,
    anyNum: includeNum,
    anySpecial: includeSpecial
  };

  var alphaUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var alphaLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var numericals = [0,1,2,3,4,5,6,7,8,9];
  var special = ['!' ,'@' ,'#' ,'$' ,'%' ,'^' ,'&' ,'*' , '(', ')' , '-', '_', '=', '+', '`', '~', '/' ,'?' ,'>' ,'<' , '[' ,']' , '{', '}'];

  var passwordOption = [];
  var generatedPassword = [];

  if(userChoices.anyUpper === true)
  {
    for(let i = 0; i < alphaUpper.length; i++)
    {
      passwordOption = passwordOption.concat(alphaUpper[i]);
    }
  }
  
  if(userChoices.anyLower)
  {
    for(let i = 0; i < alphaLower.length; i++)
    {
      passwordOption = passwordOption.concat(alphaLower[i]);
    }
  }

  if(userChoices.anyNum)
  {
    for(let i = 0; i < numericals.length; i++)
    {
      passwordOption = passwordOption.concat(numericals[i]);
    }
  }

  if(userChoices.anySpecial)
  {
    for(let i = 0; i < special.length; i++)
    {
      passwordOption = passwordOption.concat(special[i]);
    }
  }

  for(let i = 0; i < passwordLength; i++)
    {
      let randomIndex = Math.floor(Math.random() * passwordOption.length);
      generatedPassword.push(passwordOption[randomIndex]);
    }
  // console.log(generatedPassword);
  return generatedPassword;
}
