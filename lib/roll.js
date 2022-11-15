#!/usr/bin/env node

var minimist = require('minimist');
const args = minimist(process.argv.slice(2));

const sides = args.sides
const dice = args.dice
const rolls = args.rolls

exports.roll = function(sides, dice, rolls) {
    console.log(sides)
    console.log(dice)
    console.log(rolls)

    let ret = {sides: sides, dice: dice, rolls: rolls}

    return JSON.stringify(ret)
}

let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};