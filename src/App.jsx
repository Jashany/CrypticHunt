import Home from "./Pages/Home/Home"
import './App.css'
import { Routes,Route } from "react-router-dom"
import Signin from "./Pages/Signin/Signin"
import Signup from "./Pages/Signup/Signup"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
