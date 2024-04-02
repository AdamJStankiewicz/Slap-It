import React, {useState, useEffect} from 'react'
import UploadPost from './UploadPost'
import Posts from './Posts'

function App(){
  let mainContent
  switch (window.location.pathname) {
    case "/":
      mainContent = <UploadPost/>
      break;
    case "/main":
      mainContent = <Posts/>
      break;
  }
  return(

    <div>
      {mainContent}
    </div>
    

  )
}

export default App