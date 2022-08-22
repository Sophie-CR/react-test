import React from "react";
import "./Description.css";

export default function Description() {
  return (
    <div className="description">
      <p>
        I built this simple game of noughts and crosses by following the
        tutorial on the reactjs.org website.
      </p>
      <p>I then added the six extra features:</p>
      <ol className="features">
        <li className="feature">
          Display the location for each move in the format (col, row) in the
          move history list
        </li>
        <li className="feature">
          Bold the currently selected item in the move list
        </li>
        <li className="feature">
          Rewrite Board to use two loops to make the squares instead of
          hardcoding them
        </li>
        <li className="feature">
          Add a toggle button that lets you sort the moves in either ascending
          or descending order
        </li>
        <li className="feature">
          When someone wins, highlight the three squares that caused the win
        </li>
        <li className="feature">
          When no one wins, display a message about the result being a draw
        </li>
      </ol>
      <p>Give it a try!</p>

      <p>
        <a
          href="https://reactjs.org/tutorial/tutorial.html"
          target="_blank"
          rel="noreferrer"
          title="View the tutorial for building this game"
        >
          <button className="button">Click here</button>
        </a>{" "}
        to check out the tutorial
      </p>
      <p>
        <a
          href="https://codepen.io/gaearon/pen/gWWZgR?editors=0010"
          target="_blank"
          rel="noreferrer"
          title="View the demo and code on codepen"
        >
          <button className="button">Click here</button>
        </a>{" "}
        to check out their demo game
      </p>
    </div>
  );
}
