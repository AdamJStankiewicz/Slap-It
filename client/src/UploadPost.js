import React, {useState, useEffect} from 'react'

function UploadPost(){
    return (
        <div>
            <form method="POST" action="/" enctype="multipart/form-data">
                <input type="file" name="nudes" required />
                <textarea name="msg" required rows="5" cols="33"></textarea>
                <input type="submit" value="Upload" />
            </form>
        </div>
    )
}

export default UploadPost