import React, { Component } from 'react';
import firebase from '../App/firebase.js';
export class ResultSection extends Component{

    constructor(props){
      super(props);
    }
    
    render(){
      console.log("RESULT SECTION =====> " + JSON.stringify(this.props.gameResults));
      let json = JSON.stringify(this.props.gameResults);
      return(
        <div className='App'>
        
          <table>
            <thead>
            <tr>
              <th>Name:</th>
              <th>Category:</th> 
              <th>Rating:</th>
              <th>Console:</th> 
              <th>Year:</th>
              </tr>
            </thead>
            <tbody>
            { this.props.gameResults.map(game => 
              <tr>
                <td>{game.name}</td>
                <td>{game.category}</td>
                <td>{game.rating}</td>
                <td>{game.console}</td>
                <td>{game.year}</td>
              </tr>
            ) }
            </tbody>
          </table>
        </div>
      );
    }
  }

  export default ResultSection;