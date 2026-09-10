// const promise = new Promise((resolve, reject) => {

// })

// const orderCoffee = new Promise((resolve, reject) => {
//   const coffeIsReady = false;

//   setTimeout(() => {
//     if (coffeIsReady) {
//       resolve("coffee isready");
//     } else {
//       reject(" coffee is notready");
//     }
//   }, 2000);
// });

// orderCoffee
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("order is finished");
//   });

// console.log(orderCoffee);

// let p = new Promise((res, rej) => {
//   res(5);
// });

// p.then((value) => {
//   console.log("first then", value);
//   return value * 2;
// }).then((value) => {
//   console.log("second then", value);
// });

//  async function myAsyncFunc() {
//     const value = await Promise()
//     console.log(value)
// }

// function getUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve({ name: "mariam", age: 25 }), 2000);
//   });
// }

// getUser().then((user) => {
//   console.log(user.name, user.age);
// });

// async function showUser() {

//     try {
//   const user = await getUser();
//   console.log("Await", user.name);

// }

// showUser();

// async function fetchData() {
//   try {
//     const response = await Promise;
//   } catch (error) {
//     console.log("error");
//   } finally {
//     console.log("function executed");
//   }
// }

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // parse JSON response
  })
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });


  
async function getPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );

    if (!response.ok) {
      throw new Error("error");
    }

    const data = await response.json();
    console.log("data came", data);
  } catch (error) {
    console.log(error.message, "error happend");
  } finally {
    console.log("finished");
  }
}

getPost()
