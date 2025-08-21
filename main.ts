let estrella = 0
let puntos = 0
input.onButtonPressed(Button.A, function () {
    if (estrella == 0) {
        puntos += 1
        basic.showIcon(IconNames.Yes)
    } else {
        puntos += -1
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(puntos)
})
input.onButtonPressed(Button.B, function () {
    if (estrella == 1) {
        puntos += 1
        basic.showIcon(IconNames.Yes)
    } else {
        puntos += -1
        basic.showIcon(IconNames.No)
    }
    basic.pause(500)
    basic.clearScreen()
})
basic.forever(function () {
    estrella = randint(0, 1)
    if (estrella == 0) {
        basic.showString("A")
    } else {
        basic.showString("B")
    }
    basic.pause(1000)
    basic.clearScreen()
})
