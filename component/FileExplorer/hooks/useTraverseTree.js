const useTraverTree = () => {

    function insertNode(tree, folderId, item, isFolder) {
        if (tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime() ,
                name:item,
                isFolder,
                items: []
            })
            return tree;
        }
       let latestNode=[];
       latestNode= tree.items.map((ob)=>{
            return insertNode(ob, folderId, item, isFolder);
        })

        const deleteNode = () => {}; // Do it Yourself

        const renameNode = () => {}; // Do it Yourself

        return {...tree, latestNode}
    }
    return {insertNode};
}

export default useTraverTree;