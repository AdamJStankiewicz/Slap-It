import React, {useState, useEffect} from 'react'
import UploadPost from './UploadPost'

function App(){

  const [data,setData] = useState([{}])

  useEffect(()=>{
    fetch("/testfunc").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  },[])

  return(
    <div>
      <UploadPost/>
    </div>
  )
}

export default App