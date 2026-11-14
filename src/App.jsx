import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Services from './pages/Services'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'


const App = () => {
  return (
    <div className = 'app-layout'>
      <Navbar/>
      <Routes>        
        <Route path= '/' element={<Home/>}/>
        <Route path= '/about' element={<About/>}/>
        <Route path= '/contact' element={<Contact/>}/>   
        <Route path= '/services' element={<Services/>}/>   
        <Route path= '*' element={<NotFound/>}/>   
                  
      </Routes>
      <Footer/>
    </div>
  )
}

export default App