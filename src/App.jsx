import Home from "./Pages/Home/Home"
import './App.css'
import { Routes,Route } from "react-router-dom"
import Signin from "./Pages/Signin/Signin"
import Signup from "./Pages/Signup/Signup"
import store from "./Store";
import { Provider } from "react-redux";
import PrivateRoute from "./components/PrivateRoute"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import TeamCreate from "./Pages/Teamcreatejoin/TeamCreate"
import TeamPage from "./Pages/TeamPage/TeamPage"

function App() {

  return (
    <>
    <ToastContainer />
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='' element={<PrivateRoute />}>
          <Route path="/create" element={<TeamCreate />} />
          <Route path="/team" element={<TeamPage />} />
        </Route>
      </Routes>
    </Provider>
    </>
  )
}

export default App
