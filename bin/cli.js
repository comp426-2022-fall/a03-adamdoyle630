import { roll } from "/lib/roll.js"

const args = minimist(process.argv.slice(2));

let sides = 6
let dice = 1
let rolls = 1

if (args.sides) {
    sides = args.sides
}

if (args.dice) {
    dice = args.dice
}

if (args.rolls) {
    rolls = args.rolls
}

console.log(roll.roll(sides, dice, rolls))
console.log("test")
