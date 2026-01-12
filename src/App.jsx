import { Routes, Route } from "react-router-dom"
import Landingpage from "./routes/landigpage"
import Feedback from "./routes/student/feedbackpage"
import SwipePage from './routes/student/SwipePage';
import Dozentpage from "./routes/dozent/dozentpage";
import NewCourse from "./routes/dozent/newCourses";
import EditCourse from "./routes/dozent/editCourse";
import FeedbackCode from "./routes/student/feedbackcode";
import RegisterPage from "./routes/dozent/registerpage";
import RequestLogin from "./requests/requestLogin";
import { AuthenticationContext } from "./context/authenticationContext";
import { useState } from "react";


function App() {

  let [ user, setUser ] = useState({});

  RequestLogin("test", "test", () => { console.log("its working") });
  return (
    <>
      <AuthenticationContext.Provider value={{user, setUser}}>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/fb" element={<FeedbackCode />} />
          <Route path="/fb/:fbnr" element={<Feedback />} />
          <Route path="/fb/:fbnr/swipe" element={<SwipePage />} />
          <Route path="/doz" element={<Dozentpage />} />
          <Route path="/doz/newCourse" element={<NewCourse />} />
          <Route path="/doz/edit/:fbnr" element={<EditCourse />} />
        </Routes>
      </AuthenticationContext.Provider>
    </>)
}

export default App
