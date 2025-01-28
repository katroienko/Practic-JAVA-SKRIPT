//обяснение темы  статтичекие методы
// Ключевые особенности:
// 1. Принадлежат классу, а не экземпляру: Вызываются на самом классе, а не на объектах, созданных этим классом.
// 2.Обозначаются с помощью ключевого слова static.
// 3.Не имеют доступа к свойствам и методам экземпляра: Но могут работать со статическими свойствами класса.
// 4.Используются для утилитарных функций: Например, для создания вспомогательных методов.

class MyClass {
    static myStaticMethod(){
        console.log("статический метод");
        
    }
}

MyClass.myStaticMethod(); // - Принадлежат классу, а не экземпляру: Вызываются на самом классе, а не на объектах, созданных этим классом.
const obj = new MyClass();
console.log(obj);
// obj.myStaticMethod();  ошыбка

//////////////////////////
class MathUtils {
    static add(a, b){
        return a+b
    }
    static multyply(a, b){

    }
}
// console.log(MathUtils.add(a, b));
// console.log(MathUtils.multyply(a, b));
// Используются для утилитарных функций: Например, для создания вспомогательных методов.

/////////////////////////////////
// - Статические методы наследуются при наследовании класса

class Parent {
    static hello() {
      console.log("Hello");
    }
  }
  
  // Вызов статического метода у класса Parent
  Parent.hello();
  
  class Child extends Parent {}
  
  // Вызов статического метода у класса Child, унаследованного от Parent
  Child.hello();

/////////////////////////////////

// ********************* здачи
// Создайте класс Calculator, у которого будет статический метод add(), который будет принимать два числа и возвращать их сумму.

class Calculator {
    // Статический метод для сложения двух чисел
    static add(a, b) {
      return a + b;
    }
  }
  
  // Пример использования
  const result = Calculator.add(5, 10);
  console.log(result); // 15


// ********************* здачи
//   Создайте класс RandomNumberGenerator, у которого будет статический метод generate(),
// который будет генерировать случайное число в заданном диапазоне.

class RandomNumberGenerator{

    static generate(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
        
    }
}

const randomNum = RandomNumberGenerator.generate(1, 5)

console.log(`случайное число: ${randomNum}`);

// ********************* здачи
// Создайте класс StringUtils, у которого будет статический метод reverse(), который будет
// принимать строку и возвращать ее в обратном порядке.

class StringUtils {
    // Статический метод для переворота строки с использованием цикла for
    static reverse(str) {
      let reversed = "";
      for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
      }
      return reversed;
    }
  }
  
  // Пример использования
  const originalString = "hello";
  const reversedString = StringUtils.reverse(originalString);
  
  console.log(`Оригинальная строка: ${originalString}`); // Оригинальная строка: hello
  console.log(`Обратная строка: ${reversedString}`);     // Обратная строка: olleh