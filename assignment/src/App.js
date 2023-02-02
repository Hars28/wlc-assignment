import React from 'react'
import { useState } from 'react';
import { ReactOneDriveFilePicker } from 'react-onedrive-filepicker';
const Onedrive = () => {
    const [file,setFile]=useState({})
   
    if(file.length>0){
       return  (
        <div>
        Download URL: 
        <a href={file}>Download URL :{file}</a>
        </div>
    )}
    return (
        <>
            <ReactOneDriveFilePicker
                clientID="44cad80d-e65a-438f-b98d-5a3ab73acd29"
                action="share"
                multiSelect={true}
                onSuccess={(res) => {
                    console.log("data :", res)
                    setFile(res.value[0]["@microsoft.graph.downloadUrl"]
                        )
                }}
                onCancel={(res) => {
                    console.log("data :", res)
                }}
                onError={(err) => {
                    console.log(err)
                }}
            >
                <button style={{width:"100px" ,margin:"auto", border:"2px solid"}}>File Picker</button>
            </ReactOneDriveFilePicker>
        </>
    )
}

export default Onedrive