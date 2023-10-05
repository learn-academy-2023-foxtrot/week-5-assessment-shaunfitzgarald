// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.
describe("secretCodeWord", () => {
    it("returns a string with a coded message", () => {
const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"
        expect(secretCodeWord(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(secretCodeWord(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(secretCodeWord(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})
// b) Create the function that makes the test pass.

const secretCodeWord = (string) => {
    let newString = string.toLowerCase()
    newString = newString.replace(/a/g, "4")
    newString = newString.replace(/e/g, "3")
    newString = newString.replace(/i/g, "1")
    newString = newString.replace(/o/g, "0")
    return newString.charAt(0).toUpperCase() + newString.slice(1)
}
// Pseudo code:
// create a function that takes in a string
// convert the string to lowercase
// replace all a's with 4's using replace method and regex
// replace all e's with 3's using replace method and regex
// replace all i's with 1's using replace method and regex
// replace all o's with 0's using replace method and regex
// return the new string with the first letter capitalized using charAt and toUpperCase method


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("filterLetter", () => {
    it("returns an array of all the words containing that particular letter", () => {
const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const filterLetterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const filterLetterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]
        expect(filterLetter(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(filterLetter(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// b) Create the function that makes the test pass.

// Pseudo code:
// create a function that takes in an array and a letter as arguments and returns an array of all the words containing that particular letter 
// use filter method to filter through the array and return the words that include the letter
// use includes method to check if the letter is included in the word
// use toLowerCase method to convert the word to lowercase and the letter to lowercase
// return the filtered array of words that include the letter

const filterLetter = (array, letter) => {
    return array.filter(value => value.toLowerCase().includes(letter.toLowerCase()))
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    it("returns true if the array is a full house", () => {
const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
    })
})

// b) Create the function that makes the test pass.

// Pseudo code:
// create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house"
// use sort method to sort the array in ascending order 
// use filter method to filter through the array and return the numbers that are the same
// use length method to check if the length of the filtered array is 2
// if the length is 2, return true
// else return false


const fullHouse = (hand) => {
    const counts = {}
    for (let i = 0; i < hand.length; i++) {
      const card = hand[i]
      counts[card] = counts[card] ? counts[card] + 1 : 1
    }
    const values = Object.values(counts)
    return values.includes(2) && values.includes(3)
  }
 console.log(fullHouse([5, 5, 5, 3, 3]))
 //true
console.log(fullHouse([5, 5, 3, 3, 4]))
//false
console.log(fullHouse([5, 5, 5, 5, 4]))
//false
console.log(fullHouse([7, 2, 7, 2, 7]))
//true    