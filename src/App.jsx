import { Routes, Route } from "react-router-dom"
import Landingpage from "./routes/landigpage"
import Feedback from "./routes/feedbackpage"


function App() {

  return (<Routes>
      <Route path="/" element={<Landingpage/>}/>
      <Route path="/fb/:fbnr" element={<Feedback />}/>
      
    </Routes>)
}

export default App
