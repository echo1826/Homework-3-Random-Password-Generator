# Homework-3-Random-Password-Generator

## Description
This is a random password generator done in javascript. It asks the user how long the password should be, 8 to 128 inclusive, then asks if the password
should include uppercase, lowercase, numbers, or special characters in the generated password. Generation runs in browser and guarantees the password meets
the criteria the user selects.

## Problems Encountered
Some problems I ran into working on this homework was figuring out how to access the array of characters based on the user's choice. Solving this took some time
even though the answer was pretty simple once I figured out that I can just make a totally new array and add in all the characters as an option pool for the 
math.random() to choose from. Another issue I ran into was towards the end of this homework where I thought I was finished but upon further testing, due to the
randomness of how the characters are selected, there were cases where the password generated wouldn't generate some characters even though the user confirmed 
that the password include the characters. My tutor offered a quick workaround due to my surface level knowledge of coding since this issue couldn't be solved easily
with my current knowledge. By defaulting a random character upon the criteria check like so:
```javascript
if (userObject.anyUpper === true) {
    for (let i = 0; i < alphaUpper.length; i++) {
      passwordOption = passwordOption.concat(alphaUpper[i]);
    }
    generatedPassword.push(alphaUpper[Math.floor(Math.random() * alphaUpper.length)]);
    defaultCriteria++;
  }
```

## Warning
This password generated, although random, is not a good generator for secure passwords if you happen to come across this generator. Please search for a more secure
password generator.

## Credits
I want to thank my tutor, Andrew Kil, for giving my guidance and inspiration on this homework when I got stuck on trying to figure out a way to guarantee the password
passes all criteria the user wants. I also want to thank my teacher and TAs for always being available as much as possible for questions.