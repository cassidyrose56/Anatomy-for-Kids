import React, { Component } from 'react';
import CreatorBox from './CreatorBox.js';
import DbBody from './DbBody.js';

class App extends Component {
	render() {
		return (
			<div id='body' className='text' > 
				<div id='navbar'>
					Learn about the body!
				</div>
				<div id='leftMiniBar' className='miniBar'>
					Check out these 
				</div>
				<div id='rightMiniBar' className='miniBar'>
					hello
				</div>
				<DbBody />
				<CreatorBox />
			</div>
		)
	}
}


export default App;