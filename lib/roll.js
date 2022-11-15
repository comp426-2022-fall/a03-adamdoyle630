#!/usr/bin/env node
export default function roll(num_sides, num_dice, num_rolls) {
    let result = {
        sides: num_sides,
        dice: num_dice,
        rolls: num_rolls,
        results: []
    }

    return result
}