{
    const convertTemperature = function(celsius) {
        return [celsius + 273.15, celsius * 1.8 + 32]
    };

    console.log(convertTemperature(36.50))
}