// const arr = [1, 2, 3, 4, 5];

// console.log(arr);
// arr.pop();

// const obj = {
//   name: "mariam",
// };

// console.log(obj);

// function logFunc() {}

// console.log(logFunc.prototype);

// const a = "mariam";

// console.log(a);

// console.log(arr.hasOwnProperty("push"));

// console.log(Array.prototype.hasOwnProperty("push"));

// console.log(arr.__proto__.hasOwnProperty("push"));

// function Car(name) {
//   this.name = name;
// }

// const bmw = new Car("bmw");

// console.log(Object.getPrototypeOf(bmw) === Car.prototype);
// console.log(bmw.__proto__ === Car.prototype);

// class Car {
//    constructor(name) {
//     this.name = name
//    }
//    drive() {
//     return `this car is ${this.name}`
//    }
// }

// const bmw = new Car("bmw");
// const mercedes = new Car("mercedes");

// console.log(bmw)
// console.log(mercedes)
// console.log(bmw.drive());
// console.log(mercedes.drive());

// class Car {
//     name;

//     constructor(_name) {
//         this.name = _name
//     }
// }

// const audi = new Car("audi")

// console.log(audi.name)
// audi.name = "new audi"
// console.log(audi.name)

// class Car {
//     brand;
//     model;

//     get fullModel() {
//       return `${this.brand} is ${this.model}`
//     }

//     set fullModel(value) {
//        const [brand, model] = value.split(' ');
//        this.brand = brand;
//        this.model = model;
//     }
// }

// const car1 = new Car()
// // car1.brand = "bmw"
// // car1.model = "x5"

// // console.log(car1.fullModel)

// car1.fullModel = "bmw x5"

// car1.fullModel
// console.log(car1.fullModel)

// class Car {
//     #year;

//     set year(value) {
//         if (value < 1500) {
//             console.log('wrong')
//             return;
//         }
//         this.#year = value
//     }

//     get year() {
//         return this.#year
//     }
// }

// const car1 = new Car();

// car1.year = 1900;

// console.log(car1.year)

// class Car {
//   constructor(brand) {
//     this.brand = brand;
//   }

//   showBrand() {
//     return this;
//   }

//   static companyInfo() {
//     console.log(this);
//     console.log("all cars are made bythis factory");
//   }
// }

// const car1 = new Car("bmw");

// console.log(car1.showBrand())

// console.log(Car.companyInfo());

// class Person {
//     #age;

//     getAge() {
//         return this.#age
//     }

//     setAge(newAge) {this.#age = newAge}
// }

// const p = new Person();
// p.setAge(25)
// console.log(p.getAge())
// p.#age = 30

// console.log(p.#age)

// class Car {
//     constructor(name) {
//         this.name = name
//     }
//     drive() {
//         console.log(this.name + "drives")
//     }
// }

// class ElectricricCar extends Car {
//      constructor(name, battery) {
//         super(name);
//      }

//      change() {
//      console.log("change")
//      }
// }

// const car1 = new ElectricricCar()

// const car2 = new Car()

// class CoffeMachine {
//   #heatWater() {
//     console.log("");
//   }
//   #grindBeans() {}
//   #brew() {}

//   makeCoffee() {
//     this.#heatWater();
//     this.#grindBeans();
//     this.#brew();
//     console.log("coffee is ready");
//   }
// }

// const machine = new CoffeMachine();

// machine.makeCoffee()

class Animal {
    makeSound() {
        console.log("voice")
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("wof")
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("miau")
    }
}



const animals = [new Dog(), new Cat(), new Dog()]

for (const animal of animals) {
    animal.makeSound()
}