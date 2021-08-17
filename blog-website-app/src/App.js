import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import Header from './component/Header'
import About from './component/About'
import Footer from './component/Footer'
import Project from './component/Project'

function App(){
  return(
   <BrowserRouter>
      <Navbar/>
      <Route path = "/" component = {Header} exact = {true}/>
      <Route path = "/about" component = {About}/>
      <Route path = "/project" component = {Project}/>
      <Footer/>
   </BrowserRouter>
  )
}

export default App