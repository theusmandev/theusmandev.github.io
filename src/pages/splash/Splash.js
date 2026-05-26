import React, { useState, useEffect } from "react";
import "./Splash.css";
import { Fade } from "react-reveal";
import { Redirect } from "react-router-dom"; // Redirect import kiya hai

function Splash(props) {
  const [text, setText] = useState("Extracting Data...");
  const [progress, setProgress] = useState(0);
  const [redirect, setRedirect] = useState(false); // Redirect ki state add ki hai
  const theme = props.theme;

  useEffect(() => {
    // Total animation time (almost 2.5 seconds)
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 2; // Har 50ms baad 2% increase hoga
      });
    }, 50);

    // Text badalne ka timing
    const t1 = setTimeout(() => setText("Transforming Data..."), 800); // ~30%
    const t2 = setTimeout(() => setText("Loading Portfolio..."), 1700); // ~70%
    const t3 = setTimeout(() => setText("System Ready!"), 2400); // 100%

    // Animation mukammal hone ke baad Home page par bhejne ka timer (3000ms = 3 seconds)
    const t4 = setTimeout(() => setRedirect(true), 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4); // Timer clear karna zaroori hai
    };
  }, []);

  // Jab 3 seconds poore ho jayenge toh ye Home page par le jayega
  if (redirect) {
    return <Redirect to="/home" />;
  }

  return (
    <div
      className="splash-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Fade bottom duration={1000} distance="20px">
        <div style={{ textAlign: "center", width: "80%", maxWidth: "400px" }}>
          {/* Main ETL Text */}
          <h2
            style={{
              color: theme.text,
              fontFamily: "monospace",
              fontSize: "1.5rem",
              marginBottom: "20px",
            }}
          >
            {text}
          </h2>

          {/* Progress Bar Track */}
          <div
            style={{
              backgroundColor: theme.imageHighlight,
              width: "100%",
              height: "6px",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            {/* Progress Bar Fill */}
            <div
              style={{
                width: `${progress}%`,
                backgroundColor: theme.text,
                height: "100%",
                transition: "width 0.1s ease-in-out",
              }}
            ></div>
          </div>

          {/* Percentage Indicator */}
          <p
            style={{
              color: theme.secondaryText,
              fontFamily: "monospace",
              marginTop: "15px",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            [{progress}%]
          </p>
        </div>
      </Fade>
    </div>
  );
}

export default Splash;
