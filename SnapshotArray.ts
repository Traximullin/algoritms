{
    var SnapshotArray = function(length) {
        this.snap_id = 0
        this.snap_shots = {}
    };
    
    /** 
     * @param {number} index 
     * @param {number} val
     * @return {void}
     */
    SnapshotArray.prototype.set = function(index, val) {
        if(this.snap_shots[this.snap_id]) {
            this.snap_shots[this.snap_id][index] = val
        } else {
            this.snap_shots[this.snap_id] = []
            this.snap_shots[this.snap_id][index] = val
        }
    };
    
    /**
     * @return {number}
     */
    SnapshotArray.prototype.snap = function() {
        const snap_id = this.snap_id
        this.snap_id += 1
        return snap_id
    };
    
    /** 
     * @param {number} index 
     * @param {number} snap_id
     * @return {number}
     */
    SnapshotArray.prototype.get = function(index, snap_id) {
        for(let i = snap_id;i > -1; i--) {
            if(this.snap_shots[i] && this.snap_shots[i][index] !== undefined) return this.snap_shots[i][index];
        }
        return 0
    };

    const obj = new SnapshotArray(4)
    obj.set(1,2)
    obj.set(2,2)
    obj.snap()
    obj.set(2,3)
    obj.snap()
    console.log(obj)
}