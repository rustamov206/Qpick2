import './App.css'
import { Routes, Route } from "react-router-dom"

// import comopnents
import Header from "./components/header/header"
import Footer from './components/footer/footer'
import Kupit from './components/kupit/kupit'
import Kupit_inner from './components/kupit_inner/kupit_inner'
import Home from './pages/home/home'
import Zakaz from './pages/zakaz/zakaz'
import Contact from './pages/contact/contact'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cards_inner/:cardId' element={<Kupit />}/>
        <Route  path='/kupit_inner' element={<Kupit_inner/>}/>
        <Route path='/zakaz' element={<Zakaz/>} />
        <Route path='/contact_section' element={<Contact/>}/>
      </Routes>
      <Footer />
      
    </>
  )
}

export default App
