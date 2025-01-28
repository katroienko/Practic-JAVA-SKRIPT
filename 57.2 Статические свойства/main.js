// // Статические свойства —
// // это свойства, которые полезны для хранения каких-то
// // стандартных значений класса.

console.log("задача");
class User {
    static DEFAULT_ROLE = "guest";
  
    constructor(name, role = User.DEFAULT_ROLE) {
      this.name = name;
      this.role = role;
    }
  }
  
  // Пример использования
  const user1 = new User("Alice");
  console.log(user1.role); // "guest"
  
  const admin = new User("Bob", "admin");
  console.log(admin.role); // "admin"


// // ---------------
console.log("задача");
 class Counter {
    static count = 0;
    constructor(){
        Counter.count++
    }

    static getCount(){
        return Counter.count;
    }
 }


 console.log(Counter.count);
 console.log(Counter.getCount());
 

 const obg1 = new Counter();
 const obg2 = new Counter();
 const obg3 = new Counter();
 const obg4 = new Counter();

 console.log("задача");
// ●Создайте класс Counter, у которого будет статическое свойство count, которое будет хранить текущее значение счетчика.
// ●Создайте статический метод increment(), который будет увеличивать значение счетчика на 1.
// ●Создайте статический метод decrement(), который будет уменьшать значение счетчика на 1.

class Counter2 {
    
    static count = 0;
  
    static increment() {
        
         this.count++;
        //  return this.count; 
    }

    static decrement(){
        this.count--;
    }

    static getCount(){
        return this.count;
    }
}


Counter2.increment();
console.log(Counter2.getCount());

Counter2.increment();
console.log(Counter2.getCount());

Counter2.decrement();
console.log(`после декремента: ${Counter2.getCount()}`);

// ------------------
console.log("задача");
// ●Создайте класс Configuration, у которого будет статическое свойство settings, которое будет хранить объект с настройками приложения.
// ●Создайте статический метод getSetting(key), который будет возвращать значение настройки по заданному ключу.
// ●Создайте статический метод setSetting(key, value), который будет устанавливать значение настройки по заданному ключу.

class Configuration {
    static settings = { URL: 'http://example.com', PORT: 3000 };
    static getSetting(key) {
        // return this.settings[key] !== undefined ? this.settings[key] : null;
        return this.settings[key] ?? null; 
        // Возвращает значение свойства key, если оно существует и не является null или undefined.Возвращает null, если значение свойства key отсутствует или равно null/undefined.
    }
    static setSetting(key, value){
        this.settings[key] = value;
    }
}

Configuration.setSetting('PORT', 3001);
Configuration.setSetting('METHOD', 'POST')
Configuration.getSetting('URL');
console.log(Configuration.getSetting('METHOD'));
console.log(Configuration.getSetting('URL'));
console.log(Configuration.getSetting('PORT'));
console.log(Object.keys(Configuration.settings));