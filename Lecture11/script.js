// const myObj = {
//   name: "mariami",
// };

// console.log(myObj);

// // console.log(myObj);

// const myObj2 = new Object();

// // console.log(myObj2);

// function contructorFunc(name, age) {
//   this.name = "mari";
//   this.age = "27";

//   return `my name is ${this.name}, ${this.age}`;
// }

// // const myObj3 = new contructorFunc();
// // const myObj4 = new contructorFunc();

// // myObj3.surname = "svanidze"

// // myObj3.name = "mariami";
// // myObj4.name = "mzia";

// // console.log(myObj3);
// // console.log(myObj4)
// // console.log(window)

// const myObj5 = Object.create(prototypeObj);
// myObj5.name = "nino";
// console.log(myObj5);

// const prototypeObj = {
//   name: "mariam",
//   age: 27,
//   newObj: {
//     name: "mariami",
//   },
// };

// const obj6 = { ...prototypeObj };

// obj6.name = "nino";
// obj6.newObj.name = "nino"
// console.log(obj6.name);
// console.log(prototypeObj.newObj.name)
// const myobj = {}

// myobj.name = "mariami"

// console.log(myobj.name)

// const myObj = {
//     name: "John"
// }

// myObj.name = "mariami"
// console.log(myObj.name)
// console.log(myObj["name"])

// const myObj = {
//     name: "mariami",
//     hello() {
//         console.log("hello")
//     }
// }

// myObj.hello()

// const user = {
//     userName : "user",
//     logUser() {
//         console.log(this.userName)
//     }
// }

// user.logUser()

// const user = {
//     userName: "myUser"
// }

// const anotherUser = {
//     userName: 'another user'
// }

// function log() {
//     console.log(this.userName)
// }

// user.log = log
// anotherUser.log = log

// user.log()
// anotherUser.log()

// let user = {

// }

// Object.defineProperty(user, "name", {
//     value: "mariami",
//     writable: false,
//     enumerable: false,
//     configurable: false
// })

// user.name = "nino"
// console.log(user.name)

// for (let key in user) {

// }

// let user = {

// }
// user.name = 'mariami'

// console.log(Object.getOwnPropertyDescriptor(user, "name"))

// let user2 = {

// }

// Object.defineProperty(user2, "name", {value: "mari"})

// console.log(Object.getOwnPropertyDescriptor(user2, "name"))

// let user = {}
// let _name = "mari"

// Object.defineProperty(user, "name", {
//     get() {
//         return _name
//     },
//     set(value) {
//         _name = value.toUpperCase()
//     }
// })

// user.name = "nino"
// console.log(user.name)

const person = {
  firtName: "mariam",
  lastName: "svanidze",
  age: 27,
};

// const firtName = person.firtName

// const {firtName, age, lastName} = person

// console.log(firtName)

// const number = [10, 20 ,30]

// const [ a ,  , num] = number
// console.log(a,  num)

// function greet({firtName,lastName}) {
//     console.log( `${firtName}, ${lastName}`)
// }

// greet(person)

// const myMap = new Map()

// myMap.set("name", "mariam")
// myMap.set(1, "number key")

// console.log(myMap)
// console.log(myMap.get(
//     "name"
// ))
// console.log(myMap.has("name"))
// myMap.keys()
// myMap.values()
// console.log(myMap.size)

// const mySet = new Set();

// mySet.add(1);
// mySet.add(2);
// mySet.add(2);
// mySet.add(3);

// console.log(mySet);
// console.log(mySet.size);

// const number = [1, 2, 2, 2, 3, 3, 4, 4, 5, 6, 7, 7];
// const unique = [...new Set(number)];
// const unique2 = new Set(number);
// console.log(unique2);

let a = 10;

let b = a;
b = 20;

console.log(b);

let obj1 = {
  name: "mariami",
  obj: {

  }
};

let obj2 = obj1;
let obj3  = obj1;

let obj4 = {...obj1}
