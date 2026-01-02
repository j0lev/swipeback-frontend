import { Routes, Route } from "react-router-dom"
import Landingpage from "./routes/landigpage"
import Feedback from "./routes/feedbackpage"
import SwipePage from './routes/SwipePage';
import LobbyList from "./routes/LobbyList";


function App() {

  return (<Routes>
      <Route path="/" element={<Landingpage/>}/>
      <Route path="/fb/:fbnr" element={<Feedback />}/>
      <Route path="/swipe" element={<SwipePage />} />
      <Route path="/prof" element={<LobbyList />} />
    </Routes>)
}

export default App
