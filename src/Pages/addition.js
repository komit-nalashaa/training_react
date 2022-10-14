import React from "react";

export class AdditionPage extends React.Component {
    constructor() {
        super();
        this.state = {
            clicks: 0,
            show: true
        };
    }


    IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
    DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
    ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

    render() {
        return(
            <div>
            <button class="btn btn-primary" onClick={this.IncrementItem}>Click to increment by 1</button>
            <button  class= "btn btn-secondary" onClick={this.DecreaseItem}>Click to decrease by 1</button>
            <button class = "btn btn-info"onClick={this.ToggleClick}>
            { this.state.show ? 'Hide number' : 'Show number' }
            </button>
            { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
        </div>
        );
    }
}

export default AdditionPage ;
 