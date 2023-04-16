import React, { useEffect, useState } from "react";
import "./Main.css";
import { questions } from "../../../data/questions.js";
import iconHTML from "./uiux/html5.svg";
import iconCSS from "./uiux/css3.svg";
import iconJS from "./uiux/js.svg";

const Main = (props) => {
  const [icon, setIcon] = useState("");
  const [timer, setTimer] = useState(0);
  const [questionData, setQuestionData] = useState({});

  const randomQuestion = () => {
    setQuestionData(questions[Math.floor(Math.random() * questions.length)]);
    console.log(questionData.question)
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
  }, [questionData])

  useEffect(() => randomQuestion(), [])

  return (
    <main className="main">
      <div className="main__heading">
        <div className="main__timer">Timer</div>
        <h1 className="main__title">{props.title}</h1>
        <img className="main__heading-icon" src={icon} alt={`Иконка вопроса с логотипом ${questionData.type}`} />
      </div>

      <div className="main__content">
        <p className="main__question-text">
          {questionData.question}
        </p>
      </div>
      <button className={`main__button ${timer > 0 ? 'main__button_disabled' : ''}`} type="button" onClick={randomQuestion}>Другой вопрос</button>
    </main>
  );
};

export default Main;
