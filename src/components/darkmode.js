import React from "react";
import "./darkmode.css";

const DarkMode = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };
}

export default function darkmode({ toggled, onClick }) {
    return (
      <>
        <div onClick={onClick} className={`toggle${toggled ? " night" : ""}`}>
            <div className="notch">
                <div className="crater"/>
                <div className="crater"/>
            </div>
            <div>
                <div className="shape sm"/>
                <div className="shape sm"/>
                <div className="shape md"/>
                <div className="shape lg"/>
            </div>
        </div>
        

      </>
    );
}