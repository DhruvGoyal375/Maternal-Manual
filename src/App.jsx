import { useState } from 'react'
import NavBar from './components/NavBar'
import MainPage from "./components/MainPageContent"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <MainPage />
    </div>
  )
}

export default App
