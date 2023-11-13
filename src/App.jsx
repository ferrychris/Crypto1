import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './component/Navbar';
import Aos from 'aos';
import { Accordion, Bsection, Lasthero, Foooter } from './component/Bsection';
import Notification from './component/Notification';
import Mainbody from './component/Hero'
import Home from './pages/Home'



function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Navbar/>
    <Notification/>
    <Mainbody/>
    <Bsection/>
    <Accordion/>
    <Lasthero/>
    <Foooter/>
    </>
  )
}

export default App
