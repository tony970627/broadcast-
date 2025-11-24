enum RadioMessage {
    message1 = 49434
}
radio.setGroup(226)
radio.setTransmitPower(7)
radio.sendString("check-s")
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Up)) {
        radio.sendString("Forward")
    }
})
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Left)) {
        radio.sendString("Left")
    }
})
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Left)) {
        radio.sendString("Left")
    }
})
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Right)) {
        radio.sendString("Right")
    }
})
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Nostate)) {
        radio.sendString("Stop")
    }
})
