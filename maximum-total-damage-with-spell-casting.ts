{
    function maximumTotalDamage(power: number[]): number {
        let damage: Map<number, number> = new Map()
        let spells: number[] = new Array()

        for (let spell of power.sort((a, b) => a - b)) {
            if ((spells[spells.length - 1] || 0) != spell) spells.push(spell)
            damage.set(spell, (damage.get(spell) || 0) + spell)
        }

        let damages: number[] = new Array()
        for (let i: number = spells.length - 1; i >= 0; i--) {
            let curr: number = spells[i]

            let puls1: number = curr + 2 < (spells[i + 1] || 0) ? damages[i + 1] : 0;
            let puls2: number = curr + 2 < (spells[i + 2] || 0) ? damages[i + 2] : 0;
            let puls3: number = (damages[i + 3] || 0);
            let puls4: number = (damages[i + 4] || 0);
            let puls5: number = (damages[i + 5] || 0);

            damages[i] = damage.get(curr) + Math.max(puls1, puls2, puls3, puls4, puls5)
        }

        return Math.max(...damages)
    };
}