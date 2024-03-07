import React, {useState, useEffect} from 'react'
import UploadPost from './UploadPost'
import Posts from './Posts'


function App(){

  return(
    <div>
      <UploadPost/>
      <Posts/>
    </div>

  )
}

export default App