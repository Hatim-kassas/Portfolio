import { useEffect, useState } from "react";
import "./header.css";

export default function Header() {
  const [model, setModel] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("currentMode") ?? "dark";
  });

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("currentMode", newTheme);
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
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
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
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
