import React, {useState, useEffect} from 'react'

function UploadPost(){
    return (
        <div className="container">
           <form method="POST" action="/" enctype="multipart/form-data">
                
                <textarea name="msg" required rows="5" cols="33"></textarea>

                <div>
                    <input type="file" name="nudes" required />
                    <input type="submit" value="Upload" />
                </div>
            </form>
        </div>
    )
}

export default UploadPost