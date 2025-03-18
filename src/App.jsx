import './App.css'
import Cursor from './components/Cursor'
import { BrowserRouter,Routes,Route ,Navigate, useLocation} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Delivery from './pages/Delivery'
import HoverAnimation from './components/HoverAnimation'
import Login from './pages/Login'
import Signup from './pages/Signup'



function App() {
  return(
 <>
   {/* <Cursor/> */}
   {/* <HoverAnimation/> */}
  <BrowserRouter>
  <Header/>
 
  <Routes>
    <Route path='/' element={ <Home/>}></Route>
    <Route path='/delivery' element={<Delivery/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
  </Routes>
  </BrowserRouter>
 </>
  )
}

export default App
