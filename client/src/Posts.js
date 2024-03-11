import React, {useState, useEffect} from 'react'
import Post from './Post'

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
            {console.log(data.postImgs[i])}
            <img className="postImg" src={data.postImgs[i]}/>
            <p>{data.postMsgs[i]}</p>
        </div>
        )
    }

    return (arr.map(posts=>posts))
    
}

export default Posts;