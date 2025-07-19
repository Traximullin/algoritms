{
    function removeSubfolders(folder: string[]): string[] {
        folder.sort();

        const result: string[] = [];
        let prev = "";  

        for (const f of folder) {
            if (!prev || !f.startsWith(prev + "/")) {
                result.push(f);
                prev = f;  
            }
        }

        return result;
    }

    removeSubfolders(["/a","/a/b","/c/d","/c/d/e","/c/f"])
}