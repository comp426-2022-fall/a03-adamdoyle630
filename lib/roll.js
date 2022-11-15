#!/usr/bin/env node
export default function roll(sides, dice, rolls) {
    console.log(sides)
    console.log(dice)
    console.log(rolls)

    let ret = {sides: sides, dice: dice, rolls: rolls}

    return JSON.stringify(ret)
}