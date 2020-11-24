let Temperature = input.temperature(TemperatureUnit.Fahrenheit)
let tempa = 70
let tempb = 50
let tempc = 40
while (true) {
    console.log("temperature" + input.temperature(TemperatureUnit.Fahrenheit))
    if (tempb > tempa) {
        light.setAll(light.rgb(255, 0, 0))
    } else if (tempc < tempb && tempb < tempa) {
        light.setAll(light.rgb(0, 0, 255))
    } else {
        light.setAll(light.rgb(0, 255, 0))
    }
    
}
