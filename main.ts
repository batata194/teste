input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    radio.sendNumber(0)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    radio.sendNumber(1)
})
basic.forever(function () {
    radio.setGroup(1)
})
