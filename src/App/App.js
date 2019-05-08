import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import "./App.css";
//import firebase from 'firebase';
import firebase from "./firebase.js";
import {
  Link,
  Route,
  withRouter,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
import { QuizSection } from "../Quiz/QuizSection";
import { ResultSection } from "../Quiz/ResultSection";
//import { PermanentDrawerLeft } from '../Common/PermanentDrawerLeft'
import { ButtonAppBar } from "../Common/AppBar";
import { CategoriesScreen } from "../Common/categories";
import { AboutScreen } from "../Common/about";
import { RatingsScreen } from "../Common/ratings";
let textColor = "black";
let defaultStyle = {
  color: textColor
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [
        "Action",
        "Adventure",
        "Action-Adventure",
        "Role-Playing",
        "Stimulation",
        "Strategy",
        "Sports",
        "MMO",
        "Partying game",
        "Programming Game",
        "Casual"
      ],
      ratingList: [
        "Everyone",
        "Everyone 10+",
        "Teen",
        "Mature",
        "Rating Pending"
      ],
      systemList: ["PS4", "Xbox 360", "PC", "Nintendo"],
      categoryResult: "",
      ratingResult: "",
      systemResult: "",
      games: []
    };
    this.onQuizSubmit = this.onQuizSubmit.bind(this);
    this.onNavButtonSelect = this.onNavButtonSelect.bind(this);
  }

  onQuizSubmit(categorySelected, rating, system) {
    var itemsRef = firebase.database().ref("games");
    console.log("Outside1" + itemsRef);
    let newState = [];
    itemsRef
      .orderByChild("category")
      .equalTo(categorySelected)
      .once("value")
      .then(snapshot => {
        console.log("in then SNAPSHOT ========> " + JSON.stringify(snapshot));
        snapshot.forEach(function(child) {
          let currentGame = child.val();
          console.log("in then for CHILD ========> " + JSON.stringify(currentGame));
          console.log("CHILD.RATING ========> " + currentGame.rating);
          console.log("RATING ========> " + rating);
          console.log("CHILD.CONSOLE ========> " + child.console);
          console.log("SYSTEM ========> " + system);
          if (currentGame.rating == rating && currentGame.console == system) {
            console.log("inside" + JSON.stringify(child));
            newState.push({
              id: child.key,
              name: currentGame.name,
              category: currentGame.category,
              rating:currentGame.rating,
              year:currentGame.year,
              console:currentGame.console
            });
          }
        });
        this.setState({
          games: newState
        });
        this.props.history.push("/quiz-results");
      });
  }

  onNavButtonSelect(page) {
    this.props.history.push("/categories");
  }

  render() {
    console.log(this.state.games);
    return (
      <div>
        <Router>
          <ButtonAppBar onNavButtonSelect={this.onNavButtonSelect}>
            <div style={{ padding: "30px" }}>
              <div style={{ margin: "auto", width: "500px", height: "500px" }}>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={props => (
                      <QuizSection
                        categoryList={this.state.categoryList}
                        ratingList={this.state.ratingList}
                        systemList={this.state.systemList}
                        onQuizSubmit={this.onQuizSubmit}
                        {...props}
                      />
                    )}
                  />

                  <Route
                    path="/quiz-results"
                    render={props => (
                      <ResultSection
                        gameResults={this.state.games}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/categories"
                    render={props => <CategoriesScreen {...props} />}
                  />
                  <Route
                    path="/about"
                    render={props => <AboutScreen {...props} />}
                  />
                  <Route
                    path="/ratings"
                    render={props => <RatingsScreen {...props} />}
                  />
                </Switch>
              </div>
            </div>
          </ButtonAppBar>
        </Router>
      </div>
    );
  }
}

export default withRouter(App);
