{
    const countTestedDevices = (batteryPercentages: number[]): number => {
        let c = 0
      
        for (let i = 0; i < batteryPercentages.length; i++) {
          if (batteryPercentages[i] - c > 0) 
            c++
        }
      
        return c
    }

    console.log(countTestedDevices([1,1,2,1,3]))
}