import React from "react";
import "./Description.css";

export default function Description() {
  return (
    <div className="description">
      <p>
        I built this simple game of noughts and crosses by following the
        tutorial on the reactjs.org website. Give it a try!
      </p>
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
