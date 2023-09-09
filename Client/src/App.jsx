import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Listings from './components/Listings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Listings />
    </div>
  )
}

export default App
