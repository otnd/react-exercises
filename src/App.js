import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ClickCounter } from './components/ClickCounter'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/counter' element={<ClickCounter initialValue={1} increment={1} />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App