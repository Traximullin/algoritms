{
    const rotateString = function(s, goal) {
        if (s.length !== goal.length)
            return false

        return (s + s).indexOf(goal) != -1
    };
}