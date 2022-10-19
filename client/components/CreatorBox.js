// import React, { Component } from 'react';
// import Body from './Body.js';

// class CreatorBox extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             classification: '',
//             purpose: '',
//             parts: '',
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({
//             name: event.target.name,
//             classification: event.target.classification,
//             purpose: event.target.purpose,
//             parts: event.target.parts,
//         });
//       }

//       handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.name);
//         event.preventDefault();
//       }

//     render() {
//         return(
//           <form onSubmit={this.handleSubmit}>
//             <h4>Create Part</h4>
//             <label>Name
//               <input type='text' name={this.state.name} onChange={this.handleChange}></input>
//             </label>
//             <label><br/>Classification
//               <input type='text' classification={this.state.classification} onChange={this.handleChange}></input>
//             </label>
//             <label><br/>Purpose
//               <input type='text' purpose={this.state.purpose} onChange={this.handleChange}></input>
//             </label>
//             <label><br/>Parts
//               <input type='text' parts={this.state.parts} onChange={this.handleChange}></input><br/>
//             </label>
//             <button type='submit'>Submit</button>
//           </form>
//         )
//     }


// }



// export default CreatorBox;