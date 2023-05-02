{
    const plate = [
        'AAAAAAAAA      '.split(''),
        '________A__CCC_'.split(''),
        ' B   C  A    C '.split(''),
        '_B___C__A____C_'.split(''),
        ' B   C       C '.split(''),
        '_B___CCCCCCCCC_'.split('')
    ]

    function spaghettiCode(plate) {
        plate = plate.flat().join("").replace(/_/g, " ").replace(/\s+/g, ' ').trim().split(" ").sort((a,b) => a.length - b.length)
        
        return plate.at(-1)[0]
    }

    spaghettiCode(plate)
}