{
    const imageSmoother = (img) => {
        let smooth = img.map( _ => [] )
        for (let i = 0; i < img.length; i++) {

            for (let j = 0; j < img[0].length; j++) {
                let c = 0, t = 0;

                for (let k = i-1; k < i+2; k++) {

                    for (let l = j-1; l < j+2; l++) {

                        if (img[k]?.[l] >= 0) {
                            c++, t += img[k][l]
                        }

                        smooth[i][j] = t/c|0
                    }
                }
            }
        }
        return smooth
    }
}