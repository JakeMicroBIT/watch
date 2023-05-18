input.onButtonPressed(Button.A, function () {
    if (hours < 23) {
        hours += 1
    } else {
        hours = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    time = "" + hours + (":" + minutes)
    basic.showString(time)
})
input.onButtonPressed(Button.AB, function () {
    amp = !(amp)
})
input.onButtonPressed(Button.B, function () {
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
    }
})
let hours = 0
let minutes = 0
let time = ""
let amp = false
amp = false
time = ""
let adjust = 0
minutes = 0
hours = 0
basic.forever(function () {
    basic.pause(6000)
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
        if (hours < 23) {
            hours += 1
        } else {
            hours = 0
        }
    }
})
