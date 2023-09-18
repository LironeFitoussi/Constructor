console.log("test");
class Calculator{
    static addition(a, b){
        return a + b
    } 

    static subtraction(a, b){
        return a - b
    }

    static multiplication(a, b){
        return a * b
    }

    static division(a, b) {
        return a / b
    }
}

console.log(Calculator.addition(4, 8));
console.log(Calculator.subtraction(12, 8));
console.log(Calculator.multiplication(12, 8));
console.log(Calculator.division(80, 8));

class StringUtils {
    static reverseString(inputString) {
      return inputString.split(``).reverse().join(``);
    }
  }
  
  console.log(StringUtils.reverseString("Hello"));

