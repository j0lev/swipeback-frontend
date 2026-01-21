import { Routes, Route } from "react-router-dom"
import Landingpage from "./routes/landigpage"
import Feedback from "./routes/student/feedbackpage"
import Dozentpage from "./routes/dozent/dozentpage";
import NewCourse from "./routes/dozent/newCourses";
import EditCourse from "./routes/dozent/editCourse";
import FeedbackCode from "./routes/student/feedbackcode";
import RegisterPage from "./routes/dozent/registerpage";
import RequestLogin from "./requests/requestLogin";
import { useEffect } from "react";
import SwipeQuestionLoad from "./routes/student/swipequestionLoad";



function App() {
  useEffect(
    ()=>{RequestLogin("test", "test", () => { console.log("its working") })}, []
  )

  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/fb" element={<FeedbackCode />} />
        <Route path="/fb/:fbnr" element={<Feedback />} />
        <Route path="/fb/:fbnr/swipe" element={<SwipeQuestionLoad />} />
        <Route path="/doz" element={<Dozentpage />} />
        <Route path="/doz/newCourse" element={<NewCourse />} />
        <Route path="/doz/edit/:fbnr" element={<EditCourse />} />
      </Routes>

    </>)
}

export default App
