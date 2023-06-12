const isStringLessThenLength = (string, length) => string.length < length;

isStringLessThenLength('qweq', 5);

const isPolindrom = (string) => {
  const stringWihtoutSpaces = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';

  for (let i = stringWihtoutSpaces.length - 1; i >= 0; i--) {
    reversedString += stringWihtoutSpaces.at(i);
  }
  return stringWihtoutSpaces === reversedString;
};

isPolindrom('Лёша на полке клопа нашёл');

const getNumbersFromString = (stringOrNumber) => {
  const string = stringOrNumber.toString();
  let stringOfNumbers = '';
  for (let i = 0; i <= string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      stringOfNumbers += string[i];
    }
  }
  return !stringOfNumbers ? NaN : +stringOfNumbers;
};

getNumbersFromString('ECMAScript 2022');
