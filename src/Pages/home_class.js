import React from 'react';

// 1. initial state
// 2. mounting state
// 3. update state 
// 4. unmounting state


 export default class HomeClassPage extends React.Component {
    constructor(){
        // initial stage
        super();
        this.state = {
            title: "This is initial title."
        }
    }

    componentDidMount() {
        // update stage
        this.setState({title: "Update State"})
    }

    handleChangeFunction(event) {
        //update state 
        this.setState({title: event.target.value});
    }

    componentWillUnmount() {
            return
    }

    render() {
        return(
            <div> 
                <input 
                type="text" 
                value = {this.state.title} 
                onChange = {(e) => this.handleChangeFunction(e)}
                />

                <h1>{this.state.title} </h1>
            </div>
        ) 
    }
}