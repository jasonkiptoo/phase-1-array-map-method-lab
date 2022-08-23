const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



  const titleCased = () => {
    return tutorials.map((newArray) => {

///split the arrayy in between ""
      const splittedArr = newArray.split(" ");
      ////convert the array to capital letters
                              /////pass the array as an arguement
      const arrCapital = splittedArr.map((str) => str.charAt(0).toUpperCase() + str.slice(1)
      );
      ///final string is declared as an New string and joined with a " "
      const newString = arrCapital.join(" ");
      return newString;
    });
  }