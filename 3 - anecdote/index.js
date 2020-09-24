import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

//return an array of zeros with the same 'anecdotes' array length
const points = Array.apply(null, new Array(anecdotes.length)).map(
  Number.prototype.valueOf,
  0
);

const Button = ({ text, anyFunction }) => {
  return <button onClick={anyFunction}>{text}</button>;
};

const Anecdote = ({ title, text, votes }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{text}</p>
      <p>has {votes} votes</p>
    </>
  );
};

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(points);

  const handleNextAnecdote = () => {
    let indexRandom = Math.floor(Math.random() * anecdotes.length);
    setSelected(indexRandom);
  };

  const handleVotes = () => {
    let newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  //console.log(votes);
  //console.log(selected);

  return (
    <div>
      <Anecdote
        title="Anecdote of the day"
        text={anecdotes[selected]}
        votes={votes[selected]}
      />
      <Button text="Vote" anyFunction={handleVotes} />
      <Button text="Next anecdote" anyFunction={handleNextAnecdote} />
      <Anecdote
        title="Anecdote with most votes"
        text={anecdotes[votes.indexOf(Math.max(...votes))]}
        votes={Math.max(...votes)}
      />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
