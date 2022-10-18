import React, { Component } from 'react';
import style from '../styles.js';

class Users extends Component {

    constructor(props){
        super(props);
        this.state = {
            parts: []
        }
    }

    componentDidMount() {
        fetch('/api/controller')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            this.setState({ 
                parts: data 
            })
        })
        .catch((err) => console.log(err)
        );
    }
      

	render() {
		return (
            <div >
				{
				this.state.parts.map(part => {
					return <p style={style.partBoxes} key={part.name}>Name: {part.name}<br /> Purpose: {part.purpose}<br /> Parts: {part.parts} </p>
				  })
	            }
            </div>
        )
    }
}

export default Users;