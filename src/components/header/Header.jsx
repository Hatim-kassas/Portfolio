import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [model, setModel] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("currentMode") ?? "dark";
  });
  const location = useLocation();

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    // Check if we have a hash in the URL when location changes
    if (location.hash) {
      // Get the element with that id
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Scroll to that element
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("currentMode", newTheme);
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById("Projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
    setModel(false); // Close modal if open
  };

  return (
    <header className="flex" id="Profile">
      <button
        onClick={() => {
          setModel(true);
        }}
        className="popUps icon-menu flex"
      />

      {/* add this div to put nav in the center */}
      <div />
      {/* ===================================== */}

      <nav>
        <ul className="flex">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/articles'>Articles</Link>
          </li>
          <li>
            <Link to="/#Projects" onClick={scrollToProjects}>Projects</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>

      <button onClick={toggleTheme} className="mode flex">
        {theme === "dark" ? (
          <span className="icon-moon-o" />
        ) : (
          <span className="icon-sun" />
        )}
      </button>

      {model && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setModel(false);
                }}
              />
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/articles'>Articles</Link>
            </li>
            <li>
              <Link to='/#Projects' onClick={scrollToProjects}>Projects</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}