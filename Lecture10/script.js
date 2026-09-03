function double(a = 5) {
  return a * 2;
}

console.log(double());

const double2 = (a, b) => 2 * a

console.log(double2(2))


const numbers = [1,2,3,4]

const doubledforeach = numbers.forEach(n => console.log(n * 2))

const doubled = numbers.map(n => n * 2)

console.log(doubledforeach)

const nums = [1,2,3,4,5]

const even = nums.filter(n => n % 2 === 0)

console.log(even)

