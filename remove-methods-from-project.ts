function remainingMethods(n: number, k: number, invocations: number[][]): number[] {
    const adj: number[][] = Array.from({ length: n }, () => []);
    for (const [u, v] of invocations) {
        adj[u].push(v);
    }

    const suspicious = new Set<number>();
    const queue: number[] = [k];

    suspicious.add(k);

    let head = 0;
    while (head < queue.length) {
        const current = queue[head++];

        for (const neighbor of adj[current]) {
            if (!suspicious.has(neighbor)) {
                suspicious.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    let canRemove = true;
    for (const [u, v] of invocations) {
        if (!suspicious.has(u) && suspicious.has(v)) {
            canRemove = false;
            break;
        }
    }

    const result: number[] = [];
    if (!canRemove) {
        for (let i = 0; i < n; i++) {
            result.push(i);
        }
    } else {
        for (let i = 0; i < n; i++) {
            if (!suspicious.has(i)) {
                result.push(i);
            }
        }
    }

    return result;
}
