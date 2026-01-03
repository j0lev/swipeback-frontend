import { Routes, Route } from "react-router-dom"
import Landingpage from "./routes/landigpage"
import Feedback from "./routes/feedbackpage"
import SwipePage from './routes/SwipePage';


function App() {

  return (<Routes>
      <Route path="/" element={<Landingpage/>}/>
      <Route path="/fb/:fbnr" element={<Feedback />}/>
      <Route path="/fb/:fbnr/swipe" element={<SwipePage />} />
    </Routes>)
}

export default App
