{
    class EventEmitter {
        hash: Map
        constructor() {
            this.hash = new Map()
        }
    
        subscribe(event, cb) {
            if(!this.hash.has(event)) {
                this.hash.set(event, [])
            }
            
            const callback_list = this.hash.get(event)

            callback_list.push(cb)

            this.hash.set(event, callback_list)

            return {
                unsubscribe: () => {
                    const arrayFn = this.hash.get(event)

                    const deletePosition = arrayFn.findIndex(cb)

                    arrayFn.splice(deletePosition, 1)
                    
                    this.hash.set(event, arrayFn)
                }
            };
        }
      
        emit(event, args = []) {
            const arrayFn = this.hash.get(event)

            if(!arrayFn) {
                return []
            }

            return arrayFn.map(fn => fn(...args))
        }
    }

    const emitter = new EventEmitter();
    function onClickCallback() { return 99 }
    const sub = emitter.subscribe('onClick', onClickCallback);
    const test = emitter.subscribe('onClick', onClickCallback);

    test.unsubscribe()
    console.log(emitter.emit('onClick'))
}