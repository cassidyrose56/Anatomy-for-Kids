import React, { Component } from 'react';

class Body extends Component {

    constructor(props){
        super(props);
        this.state = {
            fetchedData: false,
            parts: {}
        }
    }

    componentDidMount() {
        fetch('/api/controller')
        .then((res) => res.json())
        .then((data) => {
            this.setState({ 
                fetchedData: true,
                parts: data 
            })
            console.log(this.state)
        })
        .catch((err) => console.log(err)
        );
    }
      

	render() {
		return (
            <div >
				{
				<p id='partBoxes' key={this.state.parts.name}>Name: {this.state.parts.name}<br /> Purpose: {this.state.parts.purpose}<br /> Parts: {this.state.parts.parts} </p>
				}
            </div>
        )
    }
}

export default Body;