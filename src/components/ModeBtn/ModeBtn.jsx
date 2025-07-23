import { useEffect, useState } from "react";
import { Moon, Sun } from "../Route/Route";
import "./ModeBtn.scss";

export const ModeBtn = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.classList.toggle("darkmode", darkMode);
  }, [darkMode]);

  const toggleMode = () => {
    const light = !darkMode;
    setDarkMode(light);
    localStorage.setItem("darkMode", light);
  };

  return (
    <div className="color_mode mode" onClick={toggleMode}>
      <div className="handle_mode_cont" id="handle_cont">
        <div className="mode_boolet">
          <img src={Sun} alt="" className="sun" />
          <img src={Moon} alt="" className="moon" />
        </div>
      </div>
    </div>
  );
};