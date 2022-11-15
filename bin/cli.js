import roll from "lib/roll.js"
import minimist from "minimist"

const args = minimist(process.argv.slice(2));

let sides = args.sides || 6
let dice = args.dice || 2
let rolls = args.rolls || 1

console.log(sides)
console.log("test")
console.log(JSON.stringify(roll(sides, dice, rolls)))