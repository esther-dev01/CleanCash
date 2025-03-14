import Welcome from "./welcome/WelcomePage"
import StartRecyclingPage from "./welcome/StartRecyclingPage"
import RecycledItemCount from "./welcome/RecycledItemCount"
import CalculatingBincoin from "./welcome/CalculatingBincoin"
import AdminSignIn from "./authUI/AdminSignIn"
import UserSIgnUp1 from "./authUI/UserSIgnUp1"
import UserSignUp2 from "./authUI/UserSignUp2"
import UserSignUp3 from "./authUI/UserSignUp3"
import UserSignUp4 from "./authUI/UserSignUp4"
import UserSignUp5 from "./authUI/UserSignUp5"
import JoinClub from "./authUI/JoinClub"
import InfoOverview from "./authUI/InfoOverview"
import AppreciationPage from "./welcome/AppreciationPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppreciationPageNew from "./welcome/AppreciationPageRobot"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserSIgnUp1 />} />
        <Route path="/signup2" element={<UserSignUp2 />} />
        <Route path="/signup3" element={<UserSignUp3 />} />
        <Route path="/signup4" element={<UserSignUp4 />} />
        <Route path="/signup5" element={<UserSignUp5 />} />
        <Route path="/joinclub" element={<JoinClub />} />
        <Route path="/infooverview" element={<InfoOverview />} />
        <Route path="/appreciationpage" element={<AppreciationPage />} />
        <Route path="/robotscreen-appreciationpage" element={<AppreciationPageNew />} />
        <Route path="/robotscreen-welcome" element={<Welcome />} />
        <Route path="/robotscreen-startrecycling" element={<StartRecyclingPage />} />
        <Route path="/robotscreen-recycled-items" element={<RecycledItemCount />} />
        <Route path="/robotscreen-calculating-bincoin" element={<CalculatingBincoin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
