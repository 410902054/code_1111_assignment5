basic.forever(function () {
    for (let i = 0; i <= 4; i++) {
        led.plot(2 + i, 2)
        led.plot(2 - i, 2)
        led.plot(2, 2 + i)
        led.plot(2, 2 - i)
        basic.pause(500)
    }
    basic.clearScreen()
})
