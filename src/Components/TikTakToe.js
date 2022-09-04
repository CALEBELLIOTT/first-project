import React from "react";


export class Game extends React.Component {
  render() {
    return (
      <div>
        <Board></Board>
      </div>
    )
  }
}


export class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      turn: 'X'
    }
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => { this.handleClick(i) }}
      />
    );
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.turn;
    this.setState({ squares: squares });
    if (this.state.turn == "X") {
      this.state.turn = "O"
    } else {
      this.state.turn = "X"
    }
  }
  render() {
    return (
      <div>
        <div className="board">
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      </div>
    )
  }
}

export class Square extends React.Component {
  render() {
    return (
      <div className="square" onClick={() => { this.props.onClick() }}>
        <p>{this.props.value}</p>
      </div>
    )
  }
}