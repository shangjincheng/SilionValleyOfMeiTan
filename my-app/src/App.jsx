import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './homePage/HomePage';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const basename = '/';
  return (
      <Router basename = {basename}>
          <Routes>
              <Route path="/" element={<Navigate to="/homepage" replace/>} />
              <Route path="/" element={<HomePage/>}/>
          </Routes>
      </Router>
  )
}

export default App
