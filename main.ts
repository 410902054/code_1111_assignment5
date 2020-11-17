basic.forever(function () {
    for (let j = 0; j <= 4; j++) {
        for (let i = 0; i <= j; i++) {
            if (0 + i == 0 + j) {
                led.plot(2 + i, 2)
                led.plot(2 - i, 2)
                led.plot(2, 2 + i)
                led.plot(2, 2 - i)
            }
        }
        basic.pause(100)
    }
    basic.clearScreen()
})
