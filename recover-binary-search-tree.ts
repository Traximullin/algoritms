{
    function recoverTree(root: TreeNode | null): void {
        let arr= [];

        function dfs(root){
            if(root==null)return
            dfs(root.left);
            arr.push(root.val);
            dfs(root.right)
        }

        dfs(root);

        let swap_index=Infinity;
        let swap_with=Infinity;
        let flag=false;

        for(let i=0;i<arr.length;i++){
            if(flag)break;
            for(let j=i+1;j<arr.length;j++){
                if(arr[j] < arr[i]){
                    flag=true;
                    swap_index=arr[i]
                    swap_with=arr[j]
                }
            }
        }
        
        let swapnode={}
        
        function swap(root){
            if(root===null)return
            if(root.val==swap_with)swapnode['s1']=root;
            if(root.val==swap_index)swapnode['s2']=root;
            swap(root.left);
            swap(root.right)
        }
        swap(root)

        if(swapnode!=null){
            swapnode['s1'].val=swap_index;
            swapnode['s2'].val=swap_with
        }
    };
}