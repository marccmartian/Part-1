import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Button = ({ text, anyFunction }) => {
  return <button onClick={anyFunction}>{text}</button>;
};

const Static = (props) => {
  return (
    <tr>
      <td style={{ width: "100px" }}>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  let plus = good + neutral + bad;
  let percentage = (good / plus) * 100;

  return (
    <table>
      <Static text="Good" value={good} />
      <Static text="Neutral" value={neutral} />
      <Static text="bad" value={bad} />
      <Static text="All" value={plus} />
      <Static text="Average" value={plus / 3} />
      <Static text="Positive" value={percentage + "%"} />
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadFunction = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="Good" anyFunction={handleGoodClick} />
      <Button text="Neutral" anyFunction={handleNeutralClick} />
      <Button text="Bad" anyFunction={handleBadFunction} />

      <h2>Statistics</h2>
      {good !== 0 || neutral !== 0 || bad !== 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No Feedback given</p>
      )}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
