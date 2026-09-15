// // let isActve = true

// // let score: number[] = [1,2,4]
// // let name2: Array<string> = ["mariam","ani"]

// // enum Color {Red, Green, Blue}

// // let favorite: Color = Color.Green

// // let id: string | number

// // id =123
// // id = "ddd"

// function test(a:number, b: number): void {
//   console.log(a * b)
// }

// let fn: (a:number) => number

// fn = (a: number) => {
//     return a
// }

// class BankAccount {
//   public owner: string;
//   private balance: number;
//   readonly accountNumber: string;

//   constructor(owner: string, accountNumber: string) {
//     this.owner = owner;
//     this.balance = 0;
//     this.accountNumber = accountNumber;
//   }

//   public deposit(amount: number): void {
//     this.balance += amount;
//   }

//   public getBalance(): number {
//     return this.balance;
//   }
// }

// const account = new BankAccount("Mariam", "GE123123");

// console.log(account.owner);
// account.deposit(2000);
// console.log(account.getBalance());

// console.log(account.balance);
// account.accountNumber = "ggeeeee"

// abstract class Animal {
//   constructor(public name: string) {}

//   abstract makeSound(): void;

//   move(): void {
//     console.log(`${this.name} is running`);
//   }
// }

// class Dog extends Animal {
//   makeSound(): void {
//     console.log(`${this.name} : barks`);
//   }
// }

// const dog = new Dog("rex")
// dog.makeSound()
// dog.move()

// interface Person {
//   name: string;
//   age: number;
//   birthYear?: number;
// }

// const mariam: Person = {
//     name: "mariam",
//     age: 5,
//     birthYear: 1998,
// }
function identity<GEN>(value: GEN): GEN {
  return value;
}

const num = identity<number>(42);
const text = identity<string>("mariam");

console.log(num);
console.log(text);

type ID = string | number;

const id: ID = 5