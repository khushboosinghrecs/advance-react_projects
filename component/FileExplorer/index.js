import React, { useState } from 'react'
import explorer from './Data'
import useTraverTree from './hooks/useTraverseTree';
import Folder from './Folder.js'
import './style.css'

function FileExplorer() {
    const [explorerData, setExplorerData] = useState(explorer);
    const {insertNode} = useTraverTree();

    const handleInsertNode = (folderId, item, isFolder)=>{
        const finaltree = insertNode(explorerData, folderId, item, isFolder);  
        setExplorerData(finaltree);
     }

    return (
        <div>
            <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
        </div>
    )
}

export default FileExplorer
