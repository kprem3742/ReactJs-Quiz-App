import React, { useRef, useState } from "react";
import "./Python.css";
import { data } from "../../assets/python";
import { Link } from "react-router-dom";

const Python = () => {
  let [index, setindex] = useState(0);
  let [question, setquestion] = useState(data[index]);
  let [lock, setlock] = useState(false);
  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);
  let [score, setscore] = useState(0);
  let [result, setresult] = useState(false);

  let option_array = [option1, option2, option3, option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setlock(true);
        setscore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setlock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setresult(true);
        return 0;
      }
      setindex(++index);
      setquestion(data[index]);
      setlock(false);
      option_array.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    }
  };

  const reset = () => {
    setindex(0);
    setquestion(data[0]);
    setscore(0);
    setlock(false);
    setresult(false);
  };

  return (
    <div className="container">
      <h1>Python</h1>
      {result ? (
        <></>
      ) : (
        <>
          <hr />
          <div className="index">
            <h4>Question:</h4>
            <div className="index-number">
              {index + 1} of {data.length} Questions
            </div>
          </div>

          <h2>
            {index + 1}. {question.question}
          </h2>

          <ul>
            <li
              ref={option1}
              onClick={(e) => {
                checkAns(e, 1);
              }}
            >
              {question.option1}
            </li>
            <li
              ref={option2}
              onClick={(e) => {
                checkAns(e, 2);
              }}
            >
              {question.option2}
            </li>
            <li
              ref={option3}
              onClick={(e) => {
                checkAns(e, 3);
              }}
            >
              {question.option3}
            </li>
            <li
              ref={option4}
              onClick={(e) => {
                checkAns(e, 4);
              }}
            >
              {question.option4}
            </li>
          </ul>
          <button onClick={next}>Next</button>
        </>
      )}

      {result ? (
        <>
          <hr />
          <h2>
            You Scored {score} out of {data.length}
          </h2>
          <button onClick={reset}>Retake</button>
          <div className="re-home">
            <Link to="/">
              <button>Home Page</button>
            </Link>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Python;
