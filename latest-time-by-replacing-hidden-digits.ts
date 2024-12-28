{
    const proxy: Record<number, (time: string, i: number) => string> = {
        0: (time, i) => {
            const next = time[i + 1];
            return next === '?' || next <= '3' ? '2' : '1';
        },
        1: (time, i) => {
            const prev = time[i - 1];
            return prev === '2' ? '3' : '9';
        },
        3: () => '5',
        4: () => '9',
    };
    
    function maximumTime(time: string): string {
        for (let i = 0; i < time.length; i++) {
            if (time[i] === '?') {
                const replacement = proxy[i]?.(time, i) || '?';
                time = `${time.substring(0, i)}${replacement}${time.substring(i + 1)}`;
            }
        }
        return time;
    }

    console.log(maximumTime("2?:?0"))
}