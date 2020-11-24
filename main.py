Temperature = input.temperature(TemperatureUnit.FAHRENHEIT)
tempa=70
tempb=50
tempc=40
while True:
    print("temperature"+input.temperature(TemperatureUnit.FAHRENHEIT))
    if tempb> tempa:
        light.set_all(light.rgb(255,0,0))
    elif tempc < tempb < tempa:
        light.set_all(light.rgb(0,0,255))
    else :
        light.set_all(light.rgb(0,255,0))

