import React, { useState } from 'react'

function Folder({ handleInsertNode, explorer }) {
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null,
       });

       const handleNewFolder =(e, isFolder)=>{
            e.stopPropagation();
            setExpand(true)
            setShowInput({
                visible: true,
                isFolder
            })
        }

        const addFolder=(e)=>{
            if(e.keyCode ===13 && e.target.value ){
                handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
                setShowInput({...showInput, visible: false})
            }





        }
    if (explorer.isFolder) {
        return (
            <div style={{ marginTop: 5 }}>
                <div className='folder' onClick={() => setExpand(!expand)}>
                    <span>📁 {explorer.name}</span>
                    <div>
                        <button onClick={(e)=>handleNewFolder(e, true)}>Folder +</button>
                        <button onClick={(e)=>handleNewFolder(e, false)}>File +</button>
                    </div>
                </div>
                <div style={{display:expand?'block': 'none', paddingLeft:"25px"}}>
                    {
                        showInput.visible && (
                            <div className='inputContainer'>
                                <span >{showInput.isFolder? "📁" :"📄"}</span>
                                <input onKeyDown ={addFolder}type='text' onBlur={()=>setShowInput({...showInput, visible:false})} autoFocus className='inputContainer__input '/>
                            </div>
                        )
                    }
                    {explorer.items.map((items) => {
                    return (
                        <Folder handleInsertNode={handleInsertNode} explorer={items} key={items.id} />
                    )
                })}

                </div>
            </div>
        )
    } else {
        return <span>📄{explorer.name}</span>
    }
}

export default Folder