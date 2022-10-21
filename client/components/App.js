import React, { Component } from 'react';
import CreatorBox from './CreatorBox.js';
import DbBody from './DbBody.js';

class App extends Component {
	render() {
		return (
			<div id='body' className='text' > 
				<div id='navbar'>
					Fun Health Facts!
				</div>
				<div id='leftMiniBar' className='miniBar'>
					Check these out!
				</div>
				<div id='rightMiniBar' className='miniBar'>
					Add your own!
				</div>
				<DbBody />
				<CreatorBox />
			</div>
		)
	}
}


export default App;