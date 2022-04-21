note from the developer: 

1. first assignment was a little challenging since i thought i could run a promise, which does a loop thus not blocking the web browser's functionality. however it became apparently that setTimeOut() was the best way to achieve an asynchronous loop
2. second assignment was achieved by simply creating a class with methods. the methods are run based on the values from the class properties

# Advanced Javascript assignments

## Assignment 1

Write Javascript code that prints out (using `console.log`) a sequence of numbers from 1 to 1,000,000 (one million) without blocking the interactions with the browser. For example, while that piece of Javascript is running, mouse, keyboard events etc should work fine and browser doesn't hang.

- Note that if the implementation wrong, while running that code, your CPU usage may reach over 90%
- Be careful that you may make browser hang while testing. You can quickly close the tab that's running the code to stop it

Write your code in `assignment-1.js` file.

## Assignment 2

Write an ES6 class that does the following:

- A method to get list of all countries
- A method that accept a country name as input and search for that country, either by international or native name (such as Finland or Suomi, the API has endpoint for this)
- A method that accepts a country name, find out what other countries it's bordering with
- A method that accepts the code (2 characters) of a language, find out what countries are speaking it (the API has endpoint for this)
- A method that accepts a population number (in millions), find out what countries have more people than that

Countries APIs can be found here: [https://restcountries.com/](https://restcountries.com/)

Write your code in `assignment-2.js` file.
Hint: You have to use a combination of fetch to get the country array, then use the array methods like `map`, `filter` to get what you want
