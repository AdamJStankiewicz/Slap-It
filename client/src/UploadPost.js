import React, {useState, useEffect} from 'react'

function UploadPost(){
    return (
        <div>
            <form method = "POST" action="/" enctype="multipart/form-data">
                Send file: <input type="file" name="nudes" required/>
                Message: <input type="text" name="msg" required/>
                <input type="submit" value="Upload"></input>
            </form>
        </div>
    )
}

export default UploadPost