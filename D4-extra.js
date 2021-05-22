/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

const drawHeader = function (heading) {
  console.log(
    `\n-------------------------< ${heading.toUpperCase()} >-----------------------------\n`
  )
}

/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

drawHeader("EXERCISE 1")
let array = ["Hey", "how", "are", "you"]
let reversedArray = array.reverse()
console.log(reversedArray)

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

drawHeader("EXERCISE 2")
let numbers = [21, 545, 12, 74, 54541, 55, 784]
let maximumValue = Math.max(...numbers)
console.log(maximumValue)

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

drawHeader("EXERCISE 3")
let minimumValue = Math.min(...numbers)
console.log(minimumValue)

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/

drawHeader("EXERCISE 4")
let evenNumbers = []
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i])
  }
}

console.log(evenNumbers)

/* EXERCISE 5
Write the code to delete even entries from an array.
*/
drawHeader("EXERCISE 5")

const randomNumbers = [21, 5454, 77, 8, 9523, 54, 6, 8]
const oddNumbers = []

for (let i = 0; i < randomNumbers.length; i++) {
  if (randomNumbers[i] % 2 === 0) {
    randomNumbers.splice(i, 1, "delete")
  }
}

for (let i = 0; i < randomNumbers.length; i++) {
  if (randomNumbers[i] !== "delete") {
    oddNumbers.push(randomNumbers[i])
  }
}
console.log(oddNumbers)
/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/
drawHeader("EXERCISE 6")
const toFly = "I believe I can fly."
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
const toFlyArray = toFly.split("")
const toFlyConsonantsArray = []

for (let i = 0; i < toFlyArray.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (toFlyArray[i] === vowels[j]) {
      toFlyArray.splice(i, 1, "delete")
    }
  }
}

for (let i = 0; i < toFlyArray.length; i++) {
  if (toFlyArray[i] !== "delete") {
    toFlyConsonantsArray.push(toFlyArray[i])
  }
}

const toFlyConsonants = toFlyConsonantsArray.join("")
console.log(toFlyConsonants)
/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/

drawHeader("EXERCISE 7")
const numbersToIncrease = [21, 45, 2, 68]

for (let i = 0; i < numbersToIncrease.length; i++) {
  numbersToIncrease.splice(i, 1, numbersToIncrease[i] + 1)
}

console.log(numbersToIncrease)
/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/

drawHeader("EXERCISE 8")
const toYoung = ["I", "was", "too", "young"]

for (let i = 0; i < toYoung.length; i++) {
  toYoung.splice(i, 1, toYoung[i].length)
}

console.log(toYoung)

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/
