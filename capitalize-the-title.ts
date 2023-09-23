{
    const capitalizeTitle = function(title) {
        return title
            .split(' ')
            .map(item => item.length <= 2 ? item.toLowerCase() : `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`)
            .join(' ');
    };

    console.log(capitalizeTitle("First leTTeR of EACH Word"))
}