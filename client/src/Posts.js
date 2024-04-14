import React, {useState, useEffect} from 'react'

function Posts(){

    const [data,setData] = useState([{}])

    useEffect(()=>{
        fetch("/postDatas").then(
        res => res.json()
        ).then(
        data => {
            setData(data)
            console.log(data)
        }
        )
    },[])

    let arr = []
    for (let i = 0; i < data.postCount; i++){
        arr.push(
        <div>
            <div className="postContainer">
                <img className="postImg" src={data.postImgs[i]}/>
                <p className = "postMsgs">{data.postMsgs[i]}</p>
            </div>
                <div className = "ud">
                <form method="POST" action="/main" enctype="multipart/form-data">
                    <input type="hidden" name="id" value={i} />
                    <input type="submit" name="vote" value="up"/>
                    <input type="submit" name="vote" value="down"/>
                </form>
                <p>{data.postRatios[i]}</p>
            </div>
        </div>
        )
    }

    return (arr.map(posts=>posts))

}

export default Posts;