import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const basename = '/';
  return (
      <Router basename = {basename}>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
          </Routes>
      </Router>
  )
}

export default App
