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
import Leaderboard from "./Pages/Leaderboard/Leaderboard"
import ForgetPass from "./Pages/Signin/ForgetPass/Forget"
import ResetPass from "./Pages/Signin/ForgetPass/Reset"
import PrivateRouteuser from "./components/PrivateRouteuser"
import Challenge from "./Pages/Challenges/Challengetest"
import Question from "./Pages/Challenges/Question"

function App() {

  return (
    <>
    <ToastContainer />
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPass />} />
        <Route path="/reset-password/:id/:token" element={<ResetPass />} />
        <Route path='' element={<PrivateRouteuser />} >
          
          <Route path="/challenge" element={<Challenge />} />
        <Route path="/ques/:id" element={<Question />} />

          <Route path="/create" element={<TeamCreate />} />
        </Route>
        <Route path='' element={<PrivateRoute />}>
          <Route path="/team" element={<TeamPage />} />
          <Route path="/leaderboard" element={<Leaderboard />} />

        </Route>
      </Routes>
    </Provider>
    </>
  )
}

export default App
