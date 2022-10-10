import React, { useState } from "react";
import "./App.css";
import LandingPage from "./pages/landingPage/LandingPage";
import AdminPage from "./pages/adminPage/AdminPage";
import RecordingPage from "./pages/recordingPage/RecordingPage";
import EditPage from "./pages/editPage/EditPage";

function App() {
  const [currentPage, setCurrentPage] = useState("LandingPage");

  const changePage = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="App">
      {currentPage === "LandingPage" && <LandingPage next={() => changePage("AdminPage")} />}
      {currentPage === "AdminPage" && <AdminPage />}
      {currentPage === "RecordingPage" && <RecordingPage />}
      {currentPage === "EditPage" && <EditPage />}
    </div>
  );
}

export default App;
