radio.set_group(226)
radio.set_transmit_power(7)

def on_forever():
    if GHBit.rocker(GHBit.enRocker.UP):
        radio.send_string("Forward")
basic.forever(on_forever)

def on_forever2():
    if GHBit.rocker(GHBit.enRocker.DOWN):
        radio.send_string("Backward")
basic.forever(on_forever2)
