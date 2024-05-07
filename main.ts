let cisla = 0
let cisla_2 = 0
basic.forever(function () {
    cisla = randint(0, 10)
    basic.pause(1000)
    cisla_2 = randint(0, 10)
    basic.showNumber(cisla)
    basic.showString("×")
    basic.showNumber(cisla_2)
    basic.pause(5000)
    basic.showNumber(cisla * cisla_2)
})
