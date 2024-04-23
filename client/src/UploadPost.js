import React, {useState, useEffect} from 'react'

function UploadPost(){

    const [input, setInput] = useState(false);

    const toggleInput = () => {
        setInput(!input)
    }

    return (
        <>
        <img onClick={toggleInput} className="create-post" src = "./static/create-post.svg"/>
        
        {input &&(
            
            <>
            <div className="overlay" onClick={toggleInput}></div>
            <div className="container">
            <button className="close-button" onClick={toggleInput}>&times;</button>
                <form method="POST" id ="input" action="/" enctype="multipart/form-data">
                    
                    <textarea name="msg" required rows="5" cols="33"></textarea>

                    <div>
                        <input type="file" name="nudes" required/>
                        <input type="submit" value="Upload" />
                    </div>
                </form>
            </div>
            </>
        )}
        </>
    )
}


export default UploadPost
