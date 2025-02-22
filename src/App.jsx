import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
//import './App.css'

function App() {


  return (
    <>
    <ChakraProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/cart' element={<Cart/>}/>

        </Routes>
      </Router>
    </ChakraProvider>
    </>
  )
}

export default App
