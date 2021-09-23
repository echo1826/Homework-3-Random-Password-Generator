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
function generatePassword() {
  // Asking user the requirements for password
  var passwordLength = prompt("How many characters would you like the password to be?");
  passwordLength = parseInt(passwordLength);
  if (passwordLength < 8) {
    alert("Password must be more than 8 characters long."); //quitting out if user doesn't choose a long enough password
    return;
  } else if (passwordLength > 128) {
    alert("Password must be more than 128 characters long."); //quitting out if user doesn't choose a short enough password
    return;
  } else if (!passwordLength) {
    alert("Password must be at least 8 characters to 128 characters long."); //quitting out if user doesn't choose a length at all
    return;
  }

  return defaultCriteria(passwordLength)
}

function defaultCriteria(passwordLength) {
  const userObject = criteria(passwordLength);
  //declaring the character pool the computer can use
  var alphaUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var alphaLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numericals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '`', '~', '/', '?', '>', '<', '[', ']', '{', '}'];

  //preparing empty arrays for the chosen character pool from user and the final password
  var passwordOption = [];
  var generatedPassword = [];
  var defaultCriteria = 0;

  //adding uppercase characters to password character pool
  if (userObject.anyUpper === true) {
    for (let i = 0; i < alphaUpper.length; i++) {
      passwordOption = passwordOption.concat(alphaUpper[i]);
    }
    generatedPassword.push(alphaUpper[Math.floor(Math.random() * alphaUpper.length)]);
    defaultCriteria++;
  }

  //adding lowercase characters to password character pool
  if (userObject.anyLower) {
    for (let i = 0; i < alphaLower.length; i++) {
      passwordOption = passwordOption.concat(alphaLower[i]);
    }
    generatedPassword.push(alphaLower[Math.floor(Math.random() * alphaLower.length)]);
    defaultCriteria++;
  }

  //adding numbers characters to password character pool
  if (userObject.anyNum) {
    for (let i = 0; i < numericals.length; i++) {
      passwordOption = passwordOption.concat(numericals[i]);
    }
    generatedPassword.push(numericals[Math.floor(Math.random() * numericals.length)]);
    defaultCriteria++;
  }

  //adding special characters to password character pool
  if (userObject.anySpecial) {
    for (let i = 0; i < special.length; i++) {
      passwordOption = passwordOption.concat(special[i]);
    }
    generatedPassword.push(special[Math.floor(Math.random() * special.length)]);
    defaultCriteria++;
  }

  //randomly choosing characters from password character pool to final password array then returning it
  //possible bug: doesn't guarantee the password meets the criteria the user wants
  for (let i = 0; i < passwordLength - defaultCriteria; i++) {
    let randomIndex = Math.floor(Math.random() * passwordOption.length);
    generatedPassword.push(passwordOption[randomIndex]);
  }

  //shuffles array since we gave default values in array to always meet user criteria
  shuffleArray(generatedPassword);

  //changes array to a regular string then returns it
  generatedPassword = generatedPassword.join("");

  return generatedPassword;
}

function criteria(passwordLength) {
  //storing values of the requirements the user wants
  var includeUpper = confirm("Should the password include uppercase characters?");
  var includeLower = confirm("Should the password include lowercase characters?");
  var includeNum = confirm("Should the password include numbers?");
  var includeSpecial = confirm("Should the password include special characters (!@#$$%) ?");

  //catching if user doesn't choose a requirement
  if (!includeUpper && !includeLower && !includeNum && !includeSpecial) {
    alert("Please answer ok to at least one of the questions.");
    return;
  }

  //create object that stores the user choices from the prompts
  const userChoices = {
    howLong: passwordLength,
    anyUpper: includeUpper,
    anyLower: includeLower,
    anyNum: includeNum,
    anySpecial: includeSpecial
  };

  return userChoices;
}

//shuffles elements in password array around
function shuffleArray(password) {
  for (let i = password.length - 1; i > 0; i--) { //starts from end of array
    let j = Math.floor(Math.random() * (i + 1)); //determines random index for password array
    let t = password[i]; //stores element of current index into variable
    password[i] = password[j]; //replaces current index element with random value inside array
  }
}
//default a character when the user makes the choice to include the character