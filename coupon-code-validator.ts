function validateCoupons(code: string[], businessLine: string[], isActive: boolean[]): string[] {
    const categories = ['electronics', 'grocery', 'pharmacy', 'restaurant']
    const combinedObj = code.map((c, i) => ({ code: c, biz: businessLine[i], active: isActive[i]}));
    const re = /^\w+$/;
    const output = combinedObj
        .filter(obj => re.test(obj.code) && categories.includes(obj.biz) && obj.active)
        .sort((a, b) => categories.indexOf(a.biz) - categories.indexOf(b.biz) || (a.code > b.code ? 1 : a.code < b.code ? -1 : 0))
        .map(obj => obj.code)

    return output
};