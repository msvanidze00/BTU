const str = "Hello World World"

console.log(str.length)

console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.charAt(10))
console.log(str.indexOf("o"))
console.log(str.lastIndexOf("l"))
console.log(str.includes("l"))
console.log(str.startsWith("g"))
console.log(str.endsWith("d"))
console.log(str.slice(0, 5))
const sliced = str.slice(0, 5)
console.log(sliced)
console.log(str.split(" "))

const chars = "a b c"
console.log(chars.split(" "))
const spaced = "   hello   "

console.log(spaced.trim())
console.log(spaced.trimStart())
console.log(spaced.trimEnd())

const replaced = str.replace("World", "Javascript")

console.log(replaced)
console.log(str.replaceAll("World", "Javascrpt"))

// Create regex
const regex = /\d{3}-\d{2}-\d{4}/;

// Test a string
const text = "My SSN is 1235-45-6789";
console.log(regex.test(text));  // true

// Extract match
const match = text.match(regex);
console.log(match[0]); // "123-45-6789"