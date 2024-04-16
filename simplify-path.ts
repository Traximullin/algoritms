{
    function simplifyPath(path: string): string {
        const stack = [];

        for(const char of path.split('/')) {
            if(char === '..') {
                stack.pop();
                continue
            }
            
            if(char === '.' || char === '') {
                continue
            }

            stack.push(char)
        }

        return '/' + stack.join('/')
    };

    console.log(simplifyPath('/home/'))
}