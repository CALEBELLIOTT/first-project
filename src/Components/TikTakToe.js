import React from "react";


export class TikTakToe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <Board></Board>
    )
  }
}


export class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null)
    }
  }
  handleClick(pos) {
    console.log(pos);
  }
  renderSquare(i) {
    return (
      <Square value={this.state.squares[i]} onClick={this.handleClick(i)}></Square>
    )
  }
  render() {
    return (
      <div className="board">
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>

      </div>
    )
  }

}

export class Square extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="square" onClick={() => this.props.onClick}>
        <p>{this.props.value}</p>
      </div>
    )
  }
}