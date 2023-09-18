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
      arr.sort(function(a, b) {
        return a - b;
      });
  
      return arr[arr.length - 1];
    }
  
    static findMin(arr) {
      arr.sort(function(a, b) {
        return a - b;
      });
  
      return arr[0];
    }
  }
  
  const points = [40, 100, 1, 5, 25, 10];
  console.log("Maximum:", ArrayUtil.findMax(points));
  console.log("Minimum:", ArrayUtil.findMin(points));
  