// This function returns a random Number between 1 (inclusive) and the argument passed to the function
// If no argument is passed, 6 is set, ie, returns a number between and including 1 to 6
// 		For example: 
//    getRandomDiceRoll() will return either 1, 2, 3, 4, 5, 6
const getRandomDiceRoll = function(sides=6) {
  return Math.floor( Math.random() * sides ) + 1
}

// Keep track of the previous roll in the global scope so we always remember what we rolled the last time
let lastRoll = 0


const rollTheDice = function() {
  
  // Random number between 1 and 6 (inclusive)
  const rollNum = getRandomDiceRoll()


  //////////////// NUMBERS TO WORDS ///////////////////

  // Write a condition(s) that checks the rollNum and write the string value of the number to the variable rollStr for output
  let rollStr = ``

  if (rollNum === 1) {
    rollStr = `one`
  } else if (rollNum === 2) {
    rollStr = `two`
  } else if (rollNum === 3) {
    rollStr = `three`
  } else if (rollNum === 4) {
    rollStr = `four`
  } else if (rollNum === 5) {
    rollStr = `five`
  } else if (rollNum === 6) {
    rollStr = `six`
  } else {
    rollStr = `... I'm not sure, actually`
  }


  //////////////// CHECK IF DUPLICATE ///////////////////

  // Check if this roll is the same as the last roll and say "again!" if so
  let duplicateMsg = ``

  // Assign the duplicate messaging
  if (rollNum === lastRoll) {
    duplicateMsg = ` again!`
  }

  // Update the roll history for next time
  lastRoll = rollNum



  /////////////////// UI UPDATES ////////////////////////

  // Selecting UI elements
  const eleMessage = document.querySelector(`#message`)
  const eleDice = document.querySelector(`#dice`)
 
  // Update the #message's textContent
  eleMessage.textContent = `You rolled: ${rollStr}${duplicateMsg}`
  
  // Update the #dice's src attribute
  eleDice.setAttribute(`src`, `img/dice${rollNum}.svg`)
  // eleDice.src = `img/dice5.svg` // BAD PRACTICE

  // Update the #dice's alt attribute
  eleDice.setAttribute(`alt`, `Dice face ${rollNum}`)



  // Unnecessary, but always a good idea to return something
  return rollNum
}


// When the button is clicked, callback to rollTheDice (a function defined above)
const eleRoll = document.querySelector(`#roll`)
eleRoll.addEventListener(`click`, rollTheDice)



/* 


const myCurrentAge = 18
const canadianCitizen = false


if (myCurrentAge >= 18 && canadianCitizen === true) {
  console.log(`You can vote!`)
}

 */