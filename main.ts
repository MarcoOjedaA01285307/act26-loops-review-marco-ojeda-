let hight = 0
let Counter_short = 0
let hight_sum = 0
let Counter_medium = 0
let counter_tall = 0
let random_numbers = 0
let Contador_green = 0
let Contador_blue = 0
let contador_red = 0
let numbers = 0
let counter_even = 0
let Counter_odd = 0
let angle = 0
let counter_acute = 0
let counter_straight = 0
let Counter_obtuse = 0
let coordinate_x = 0
let Coordinate_y = 0
input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 30; index++) {
        hight = randint(100, 200)
        if (hight <= 150) {
            basic.showString("short")
            Counter_short += 1
            hight_sum = hight_sum + hight
        } else if (hight == 151 && hight <= 170) {
            basic.showString("medium")
            Counter_medium += 1
            hight_sum = hight_sum + hight
        } else if (hight >= 171) {
            basic.showString("tall")
            counter_tall += 1
            hight_sum = hight
        }
    }
    basic.showString("total short persons")
    basic.showNumber(Counter_short)
    basic.showString("total medium persons")
    basic.showNumber(Counter_medium)
    basic.showString("total tall persons")
    basic.showNumber(counter_tall)
    basic.showNumber(hight_sum + 30)
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 6; index++) {
        random_numbers = randint(1, 6)
        if (random_numbers == 1 || random_numbers == 3) {
            basic.showNumber(random_numbers)
            basic.showString("team green")
            Contador_green += 1
        } else if (random_numbers == 2 || random_numbers == 5) {
            basic.showNumber(random_numbers)
            basic.showString("team blue")
            Contador_blue += 1
        } else if (random_numbers == 4 || random_numbers == 6) {
            basic.showNumber(random_numbers)
            basic.showString("team red")
            contador_red += 1
        }
    }
    basic.showNumber(Contador_green)
    basic.showString("team green")
    basic.showNumber(Contador_blue)
    basic.showString("team blue")
    basic.showNumber(contador_red)
    basic.showString("team red")
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        numbers += randint(1, 100)
        basic.showNumber(numbers)
        if (0 == numbers % 2) {
            basic.showString("even")
            counter_even += 1
        } else {
            basic.showString("odd")
            Counter_odd += 1
        }
    }
    basic.showString("total even ")
    basic.showNumber(counter_even)
    basic.showString("total odd")
    basic.showNumber(Counter_odd)
})
input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index <= 10; index++) {
        angle = randint(0, 180)
    }
    if (angle < 90) {
        basic.showString("acute")
        counter_acute += 1
    } else if (angle == 90) {
        basic.showString("straight")
        counter_straight += 1
    } else if (angle > 90) {
        basic.showString("obtuse")
        Counter_obtuse += 1
    }
    basic.showString("total obtuse")
    basic.showNumber(Counter_obtuse)
})
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P2)) {
        coordinate_x = 0
        Coordinate_y = 0
        led.plot(coordinate_x, Coordinate_y)
        basic.pause(300)
        if (coordinate_x == Coordinate_y) {
            music.playMelody("C5 B A G F E D C ", 120)
        } else if (coordinate_x != Coordinate_y) {
            music.playTone(988, music.beat(BeatFraction.Whole))
        }
        basic.clearScreen()
    }
})
