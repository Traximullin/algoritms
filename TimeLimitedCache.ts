{
    class TimeLimitedCache {
        value: object
        // можно реализовать и с помощью new Map() и setTimeout
        constructor() {
            this.value = {}
        } 

        set(key,value,duration) {
            const flag = this.value.hasOwnProperty(key)

            this.value[key] = {
                value,
                duration,
                createdAt: Date.now()
            }

            return flag
        }

        get(key) {
            if(!this.value.hasOwnProperty(key)) {
                return -1
            }
            
            const { value, createdAt, duration} = this.value[key]

            if(!this.validateTime(createdAt,duration)) {
                return -1
            }

            return value
        }

        count() {
            let count = 0

            Object.values(this.value).forEach((elem: any) => {
                if(this.validateTime(elem.createdAt, elem.duration)) {
                    count++
                }
            })
            return count
        }

        private validateTime(createdAt, duration) {
            const currentTime = Date.now()

            if((createdAt + duration) < currentTime) {
                return false
            }

            return true
        }
    }
}