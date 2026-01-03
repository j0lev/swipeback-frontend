import { Routes, Route } from "react-router-dom"
import Landingpage from "./routes/landigpage"
import Feedback from "./routes/feedbackpage"
import SwipePage from './routes/SwipePage';
import LobbyList from "./routes/LobbyList";
import ProfMain from "./routes/ProfMain";
import CreateLobby from "./routes/CreateLobby";


function App() {

  return (<Routes>
      <Route path="/" element={<Landingpage/>}/>
      <Route path="/fb/:fbnr" element={<Feedback />}/>
      <Route path="/swipe" element={<SwipePage />} />
      <Route path="/prof" element={<ProfMain />} />
      <Route path= "/prof/create" element={<CreateLobby/>}/>
    </Routes>)
}

export default App
