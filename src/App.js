import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Welcome from './components/Welcome'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome name="Davide" />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App