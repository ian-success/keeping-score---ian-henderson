input.onButtonPressed(Button.A, function () {
    basic.showNumber(Students)
    Students += 1
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        . . . . #
        # # # # #
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Tie)
    Tie += 1
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Teachers)
    Teachers += 1
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        # . . . .
        # # # # #
        `)
    basic.clearScreen()
})
let Students = 0
let Teachers = 0
let Tie = 0
Tie = 1
Teachers = 1
Students = 1
