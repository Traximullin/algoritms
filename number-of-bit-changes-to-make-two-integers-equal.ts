{
    function minChanges(n: number, k: number): number {
        let n_bytes = n.toString(2);
        const k_bytes = k.toString(2).padStart(n_bytes.length, '0');

        let c = 0;

        for (let i = 0; i < n_bytes.length; i++) {
            if (n_bytes[i] !== '1' || k_bytes[i] !== '0')
                continue;
    
            c++
            n_bytes = n_bytes.slice(0, i) + '0' + n_bytes.slice(i + 1)
    
            if (n_bytes === k_bytes) break
        }

        return n_bytes === k_bytes ? c : -1;
    };

    console.log(minChanges(13,4))
    // console.log(minChanges(14,13))
}