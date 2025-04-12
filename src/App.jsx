import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Articles from './components/pages/articles/Articles';
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import About from "./components/pages/about/About";

function App() {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200){
        setShowBtn(true)
      }else {
        setShowBtn(false)
      }
    })

    return () => {
      window.removeEventListener("scroll", () => {});
    }
  }, []);

  return (
    
    <Router> 
      <div id="up" className="container">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div className="divider" />
              <Main />
              <div className="divider" />
              <Contact />
            </>
          }/>
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <div className="divider" />
        <Footer />
        
        <a style={{ opacity: showBtn ? 1 : 0, transition: "0.5s" }} href="#up">
          <button className="icon-keyboard_arrow_up scroll2Top"></button>
        </a>
      </div>
    </Router>
  );
}

export default App;
