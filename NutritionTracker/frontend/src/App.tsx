import { useState } from 'react'
import './App.css'
import {Home} from "./NutritionTracker/Components/Home.tsx";


function App() {
  const [details, setDetails] = useState(0)

    setDetails(details);

  return (
    <>
        <Home></Home>
    </>
  )
}

export default App
