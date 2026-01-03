import { Routes, Route } from "react-router-dom"
import Landingpage from "./routes/landigpage"
import Feedback from "./routes/feedbackpage"
import SwipePage from './routes/SwipePage';
import Dozentpage from "./routes/dozentpage";
import NewCourse from "./routes/newCourses";


function App() {

  return (<Routes>
      <Route path="/" element={<Landingpage/>}/>
      <Route path="/fb/:fbnr" element={<Feedback />}/>
      <Route path="/swipe" element={<SwipePage />} />
      <Route path="/doz" element={<Dozentpage/>}/>
      <Route path="/doz/newCourse" element={<NewCourse/>}/>
      <Route path="/doz/edit/:fbnr" element={<EditCourse/>}/>
      
    </Routes>)
}

export default App
