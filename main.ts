radio.setGroup(7)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Up)) {
        radio.sendString("Forward")
    } else if (GHBit.Rocker(GHBit.enRocker.Down)) {
        radio.sendString("Backward")
    } else if (GHBit.Rocker(GHBit.enRocker.Left)) {
        radio.sendString("Left")
    } else if (GHBit.Rocker(GHBit.enRocker.Right)) {
        radio.sendString("Right")
    } else if (GHBit.Rocker(GHBit.enRocker.Nostate)) {
        radio.sendString("Stop")
    }
    basic.pause(100)
})
