import React, { Component } from 'react';
import CreatorBox from './CreatorBox.js';
import DbBody from './DbBody.js';

class App extends Component {
	render() {
		return (
			<div id='body'> 
				<div id='navbar' className='text'>
					Learn about your body!
				</div>
				<div>

				</div>
				<div>
					
				</div>
				<DbBody />
				<CreatorBox />
			</div>
		)
	}
}


export default App;