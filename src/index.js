import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Logo from "./Logo";
import Description from "./Description";
import Footer from "./Footer";

function Square(props) {
  return (
    <button className={props.changeClass} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    let changeClass = "square";
    if (this.props.winningCells && this.props.winningCells.indexOf(i) > -1)
      changeClass = "square winning-square";
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        changeClass={changeClass}
        key={"sq_" + i}
      />
    );
  }

  render() {
    let allSquares = [];
    for (var row_n = 0; row_n < 3; row_n++) {
      let rowSquares = [];
      for (var col_n = 0; col_n < 3; col_n++) {
        rowSquares.push(this.renderSquare(row_n * 3 + col_n));
      }
      allSquares.push(
        <div key={"row_" + row_n} className="board-row">
          {rowSquares}
        </div>
      );
    }
    return <div className="game-board">{allSquares}</div>;
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null), clicked: null }],
      xIsNext: true,
      stepNumber: 0,
      movesAscending: true,
    };
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{ squares: squares, clicked: i }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }
  jumpTo(step) {
    this.setState({ stepNumber: step, xIsNext: step % 2 === 0 });
  }
  toggleOrder() {
    this.setState({ movesAscending: !this.state.movesAscending });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winnerInfo = calculateWinner(current.squares);
    const winner = winnerInfo ? winnerInfo[0] : winnerInfo;
    const winningCells = winnerInfo ? winnerInfo.slice(1) : winnerInfo;
    let moves = history.map((step, move) => {
      const desc = move
        ? "Go to move #" +
          move +
          " - col " +
          ((step.clicked % 3) + 1) +
          ", row " +
          (Math.floor(step.clicked / 3) + 1)
        : "Go to game start";
      const buttonClasses =
        move === this.state.stepNumber
          ? "button move-button currently-selected"
          : "button move-button";
      return (
        <li key={move}>
          <button className={buttonClasses} onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });
    if (this.state.movesAscending === false) {
      moves = moves.reverse();
    }
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    const oppOrder = this.state.movesAscending ? "descending" : "ascending";
    let toggleButton = (
      <button
        className="button toggle-button"
        onClick={() => this.toggleOrder()}
      >
        Toggle moves to {oppOrder} order
      </button>
    );
    return (
      <div className="container">
        <div className="row game">
          <div className="col-sm-4">
            <Board
              squares={current.squares}
              winningCells={winningCells}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="col-sm-7 game-info">
            <div className="status">{status}</div>
            <div>{toggleButton}</div>
            <ul className="moves">{moves}</ul>
          </div>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return [squares[a], a, b, c];
  }

  for (let i = 0; i < 9; i++) {
    if (squares[i] === null) return null;
  }
  return ["Draw", null];
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <Logo />
    <div className="row">
      <div className="col-lg-6">
        <Description />
      </div>
      <div className="col-lg-6">
        <Game />
      </div>
    </div>
    <Footer />
  </div>
);
reportWebVitals();
