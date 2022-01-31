import { Routes, Route } from "react-router-dom";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Startseite from "./pages/Startseite";
import Seminare from "./pages/Seminare";
import News from "./pages/News";
import Links from "./pages/Links";
import Kontakt from "./pages/Kontakt";
import Familien from "./pages/Familien";
import Hochzeit from "./pages/Hochzeit";
import Einzel from "./pages/Einzel";
import Meditation from "./pages/Meditation";
import Übermich from "./pages/About";
import Haftung from "./pages/Haftung";
import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="page-container">
        <div className="content-wrap">
          <MyNav />
          <Routes>
            <Route exact path="/" element={<Startseite />} />
            <Route path="/about" element={<Übermich />} />
            <Route path="/seminare" element={<Seminare />} />
            <Route path="/news" element={<News />} />
            <Route path="/links" element={<Links />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/familien" element={<Familien />} />
            <Route path="/hochzeit" element={<Hochzeit />} />
            <Route path="/einzel" element={<Einzel />} />
            <Route path="/meditation" element={<Meditation />} />
            <Route path="/haftung" element={<Haftung />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
