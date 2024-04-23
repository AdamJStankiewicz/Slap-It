import React, {useState, useEffect} from 'react'
import UploadPost from './UploadPost'
import Posts from './Posts'
import Test from './Test'
import Login from './Login'
import './Login.css'

function App(){
  let mainContent
  switch (window.location.pathname) {
    case "/":
      mainContent = <UploadPost/>
      break;
    case "/main":
      mainContent = <Posts/>
      break;
    case "/test":
      mainContent = <Test/>
      break;
  }
  return(

    <div>
      {mainContent}
    </div>
    

  )
}

export default App