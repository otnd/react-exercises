import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShowGithubUser from './components/ShowGitHubUser'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='users/:username' element={<ShowGithubUser />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}
export default App;
