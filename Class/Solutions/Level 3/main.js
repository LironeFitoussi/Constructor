// Exercise 1
console.log("test");
class Calculator {
  static addition(a, b) {
    return a + b;
  }

  static subtraction(a, b) {
    return a - b;
  }

  static multiplication(a, b) {
    return a * b;
  }

  static division(a, b) {
    return a / b;
  }
}

console.log(Calculator.addition(4, 8));
console.log(Calculator.subtraction(12, 8));
console.log(Calculator.multiplication(12, 8));
console.log(Calculator.division(80, 8));

// Exercise 2
class StringUtils {
  static reverseString(inputString) {
    return inputString.split(``).reverse().join(``);
  }
}

console.log(StringUtils.reverseString("Hello"));

// Exercise 3
class ArrayUtil {
  static findMax(arr) {
    arr.sort(function (a, b) {
      return a - b;
    });

    return arr[arr.length - 1];
  }

  static findMin(arr) {
    arr.sort(function (a, b) {
      return a - b;
    });

    return arr[0];
  }
}

const points = [40, 100, 1, 5, 25, 10];
console.log(`Maximum: ${ArrayUtil.findMax(points)}`);
console.log(`Minimum: ${ArrayUtil.findMin(points)}`);

// Exercise 4
class Randomizer {
  static generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
console.log(Randomizer.generateRandomNumber(15, 60));

// Exercise 5
class StringUtils2 {
  static countCharacters(string, char) {
    let count = 0; 
    string.split('').forEach((character) => {
      if (character === char) { 
        count++;
      }
    });
    return count;
  }
}

console.log(StringUtils2.countCharacters("Hello", "l"));

// Exercise 6
class DateUtils {
  static formatDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month > 10? month:`0`+month}-${day > 10? day:`0`+day}`;
  }
}

const a_date = new Date("sep 5 1999");
console.log(DateUtils.formatDate(a_date));

// Exercise 7
class Calculator1 {
  static calculateFactorial(n) {
    let factorialResult = 1;
    for (let i = n; i > 0; i--) {
      factorialResult *= i; 
    }
    return factorialResult;
  }
}

console.log(Calculator1.calculateFactorial(5));
