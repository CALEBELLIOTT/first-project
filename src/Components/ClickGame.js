import React from "react";


export class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clickNum: 0
        }
    }
    render() {
        function increaseClicks() {
            this.setState({ clickNum: this.state.clickNum + 1 })
        }
        return (
            <div>
                <h1>Click the button!</h1>
                <p>Button has been clicked {this.state.clickNum} times!</p>
                <button onClick={() => { this.setState({ clickNum: this.state.clickNum + 1 }) }}>click!</button>
            </div>
        )
    }
}