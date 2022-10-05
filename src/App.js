import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ClickCounter from './components/ClickCounter'
import Welcome from './components/Welcome'
import {GitHubUserList} from './components/GitHubUserList'
import ShowGitHubUser from './components/ShowGitHubUser'

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/users">Username</Link>
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
          <Route path="/users" element={<GitHubUserList />}>
            <Route index element={<div><h1>Add a user and select it</h1></div>} />
            <Route path=":username" element={<ShowGitHubUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App