import React, { useEffect, useState } from "react";
import "./Main.css";
import { questions } from "../../../data/questions.js";
import iconHTML from "./uiux/html5.svg";
import iconCSS from "./uiux/css3.svg";
import iconJS from "./uiux/js.svg";
import { Fade } from "react-awesome-reveal";

const Main = (props) => {
  const [icon, setIcon] = useState("");
  const [seconds, setSeconds] = useState(50);
  const [timerActive, setTimerActive] = useState(true);
  const [questionData, setQuestionData] = useState({});

  const randomQuestion = () => {
    setQuestionData(questions[Math.floor(Math.random() * questions.length)]);
  };

  useEffect(() => {
    if (questionData.type === "css") {
      setIcon(iconCSS);
    }
    if (questionData.type === "html") {
      setIcon(iconHTML);
    }
    if (questionData.type === "js") {
      setIcon(iconJS);
    }
  }, [questionData]);

  useEffect(() => randomQuestion(), []);

  useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 100, seconds - 1);
    } else {
      setTimerActive(false);
    }
  }, [seconds, timerActive]);



  return (
    <main className="main">
      <div className="main__heading">
        <Fade direction="right">
          <div className="main__heading-timer">
            <p className="main__heading-timer-span">
              {seconds > 0 ? seconds / 10 : "Done!"}
            </p>
          </div>
        </Fade>

        <Fade>
          <h1 className="main__title">{props.title}</h1>
        </Fade>

        <Fade direction="left" className="main__heading-icon"><img
            className="main__heading-icon"
            src={icon}
            alt={`Иконка вопроса с логотипом ${questionData.type}`}
          /></Fade>
          
      </div>

      <Fade>
        <div className="main__content">
          <p className="main__content-question-text">{questionData.question}</p>
        </div>
      </Fade>

      <Fade>
        <button
          className="main__button"
          type="button"
          onClick={() => {
            setTimerActive(!timerActive);
            randomQuestion();
            setSeconds(50);
          }}
          disabled={seconds > 0 && true}
        >
          Другой вопрос
        </button>
      </Fade>
    </main>
  );
};

export default Main;
