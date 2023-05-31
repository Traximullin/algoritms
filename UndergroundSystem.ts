{
    class UndergroundSystem {
        underground: object
        average_time: object

        constructor() {
            this.underground = {}
            this.average_time = {}
        }

        checkIn(id, stationName, t) {
            const { underground } = this
        
            underground[id] = {
                startStation: stationName,
                t
            }
        }

        checkOut(id, stationName, t) {
            const { underground, average_time } = this
            const last = underground[id]
            const key = this.generateKey(last.startStation, stationName)

            if(average_time[key]) {
                average_time[key] = {
                    total: average_time[key].total + t - last.t,
                    count: average_time[key].count + 1
                }
            } else {
                average_time[key] = {
                    total: t - last.t,
                    count: 1
                }
            }
        }
        
        getAverageTime(startStation, endStation) {
            const { average_time } = this
            const key = this.generateKey(startStation,endStation)
            const { total, count } = average_time[key]
            
            return total / count
        }

        private generateKey(start, end) {
            return `end:${end}/start:${start}`
        }
    }
    // const UndergroundSystem = function() {
    //     this.underground = {}
    //     this.average_time = {}
    // };

    // UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    //     const { underground } = this
    
    //     underground[id] = {
    //         startStation: stationName,
    //         t
    //     }
    // };

    // UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    //     const { underground, average_time } = this
    //     const last = underground[id]
    //     const key = `end:${stationName}/start:${last.startStation}`
    //     if(average_time[key]) {
    //         average_time[key] = {
    //             total: average_time[key].total + t - last.t,
    //             count: average_time[key].count + 1
    //         }
    //     } else {
    //         average_time[key] = {
    //             total: t - last.t,
    //             count: 1
    //         }
    //     }
    // };

    // UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    //     const { average_time } = this
    //     const key = `end:${endStation}/start:${startStation}`
    //     const { total, count } = average_time[key]
        
    //     return total / count
    // };

}