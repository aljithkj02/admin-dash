import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import AllRoutes from './routes/AllRoutes'
import { Navbar } from './components';
import './App.css'

function App() {

  return (
    <ChakraProvider>
        <Navbar />
        <AllRoutes />
    </ChakraProvider>
  )
}

export default App
