{
    const convertToMinute = (time: string) => {
        const [hours, minutes] = time.split(":");

        return Number(hours) * 60 + Number(minutes);
    }

    function convertTime(current: string, correct: string): number {
        const current_minutes = convertToMinute(current)
        let correct_minutes = convertToMinute(correct)

        const times = [60, 15, 5, 1];
        let c = 0;

        while (correct_minutes > current_minutes) {
            const diff = correct_minutes - current_minutes;

            for (let i = 0; i < times.length; i++) {
                if (diff >= times[i]) {
                    correct_minutes -= times[i]
                    break
                }
            }

            c += 1;
        }

        return c
    };

    console.log(convertTime("02:30", "04:35"))
}