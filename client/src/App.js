import React, {useState, useEffect} from 'react'
import UploadPost from './UploadPost'
import Posts from './Posts'

function App(){

  return(
    <div>
      <div className="container">
      <UploadPost/>
      </div>
      <Posts/>

    </div>
    

  )
}

export default App