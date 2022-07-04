import React from "react"


import './home.css'

import Nav_bar from "../Navbar/Nav_bar"
import Sidebar from "../Sidebar/Sidebar"
import DropFileInput from '../drop-file-input/DropFileInput'



export default function Home() {
  const onFileChange = (files) => {
    console.log(files);}


  return (
    <>
      <Nav_bar/>
      
        <Sidebar/>
     
        <div className="box">
        <h2 className="header">
            You can drop files here too!
        </h2>
        <DropFileInput
            onFileChange={(files) => onFileChange(files)}
        />
    </div>
    
    </>
  )
}