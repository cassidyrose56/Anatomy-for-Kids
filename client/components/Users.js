import React, { Component } from 'react';

class Users extends Component {

    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('/api/controller')
        .then(res => res.json())
        .then(data => {
            this.setState({ users: data })
        })
        .catch(err => {
            console.log(err)
        })
    }
      

	render() {
		return (
            <ul>
				{
				  this.state.users.map(user => {
					<li>Username {user.username}, Age: {user.age}</li>
				  })
	            }
            </ul>
        )
    }
}

export default Users;