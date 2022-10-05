import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ClickCounter from './components/ClickCounter'
import Welcome from './components/Welcome'
import ShowGithubUser from './components/ShowGitHubUser'

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/users/otnd">Username</Link>
        </div>
        <br/>
        <Routes>
          <Route
            path='*' element={
              <>
                <h1>Not Found</h1><br />
                <Link to="/">Return to Home</Link>
              </>
            }
          />
          <Route path='/' element={<Welcome name="Davide" />} />
          <Route path='/counter' element={<ClickCounter initialValue={1} increment={1} />} />
          <Route path='users/:username' element={<ShowGithubUser />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App