{
    const dayOfYear = function(date) {
        return ((new Date(date) - new Date(date.slice(0,4))) + 86400000) / 86400000;
    };
}