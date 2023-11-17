import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/Projects' element={<Projects/>}></Route>
      </Routes>
    </>
  )
}

export default App
