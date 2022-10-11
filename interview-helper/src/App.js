import React, { useState } from "react";
import "./App.css";
import LandingPage from "./pages/landingPage/LandingPage";
import AdminPage from "./pages/adminPage/AdminPage";
import RecordingPage from "./pages/recordingPage/RecordingPage";
import EditPage from "./pages/editPage/EditPage";

function App() {
  const [currentPage, setCurrentPage] = useState("LandingPage");
  const [currentQuestion, setCurrentQuestion] = useState("");

  const startPractice = (practiceQuestion) => {
    setCurrentPage("RecordingPage");
    console.log("Practice question ", practiceQuestion);
    setCurrentQuestion(practiceQuestion);
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="App">
      {currentPage === "LandingPage" && <LandingPage next={changePage} />}
      {currentPage === "AdminPage" && <AdminPage start={startPractice} next={changePage} />}
      {currentPage === "RecordingPage" && (
        <RecordingPage reviewQuestion={currentQuestion} next={changePage} />
      )}
      {currentPage === "EditPage" && <EditPage next={changePage} />}
    </div>
  );
}

export default App;
