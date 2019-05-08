import React, { Component } from 'react';
import logo from '../Logo3.png';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import '../App/App.css';
import {
  Link
} from 'react-router-dom';
import ControlledOpenSelect from '../Common/ControlledOpenSelect';

export class QuizSection extends Component{

    constructor(props){
      super(props)
      this.state = {
        Category : "",
        Rating : "",
        System : ""
      }
      this.onCategorySelect = this.onCategorySelect.bind(this);
      this.onRatingSelect = this.onRatingSelect.bind(this);
      this.onSystemSelect = this.onSystemSelect.bind(this);
    }

    onCategorySelect(selectedItem){
      this.setState({
        Category : selectedItem
      });
    }
    onRatingSelect(selectedItem){
      this.setState({
        Rating : selectedItem
      });
    }
    onSystemSelect(selectedItem){
      this.setState({
        System : selectedItem
      });
    }
    render(){
      console.log(this.props.ratingList);
      return(
        <div>
          <div><img  style={{marginLeft:'25%'}} src={logo} className="App-logo" alt="logo" /></div>
          <table style={{width : '50%', paddingTop: '30px'}}>
            <thead>
              <tr>
              <th>Categories</th>
              <th>Rating</th> 
              <th>Systems</th>
              <th></th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <ControlledOpenSelect
                  listItems = {this.props.categoryList}
                  listId = 'Category'
                  onItemSelect = {this.onCategorySelect}
                />
              </td>
              <td>
              <ControlledOpenSelect
                  listItems = {this.props.ratingList}
                  listId = 'Rating'
                  onItemSelect = {this.onRatingSelect}
                />
              </td>
              <td>
              <ControlledOpenSelect
                  listItems = {this.props.systemList}
                  listId = 'System'
                  onItemSelect = {this.onSystemSelect}
                />
              </td>
              <td><Link to='quiz-results'><Button variant="contained" style={{background: 'rgb(68, 26, 68)', color: '#fff',textDecoration :"none"}} onClick={() => {

                  this.props.onQuizSubmit(this.state.Category,
                                          this.state.Rating, 
                                          this.state.System);
              }
              }>Submit</Button></Link></td>
            </tr>
            </tbody>
          </table>
          </div>
      );
    }
  }

  export default QuizSection;