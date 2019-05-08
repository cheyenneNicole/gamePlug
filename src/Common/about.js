import React from 'react'

import {
    withRouter
} from 'react-router-dom';

export class AboutScreen extends React.Component {

    render() {
        return (
            <div style = {{textAlign: 'center'}}>
            <div style={{position:"absolute", top:100,left:0}}></div>
            <div style={{ color: "#4b0082", fontSize: 40,position:"relative",top:-20}}>About</div>
            <div style={{fontSize: 20,padding:10}}>
                    The creation of +100 video games every year for the past 50 years has caused some games to get lost or forgotten.
                Game plug will recommend videogames ranked by matching characteristics, and email you the results.
                The Game Plug breaks video games down by age rating, characteristics, and gaming system to compile the perfect games
                for you!
                </div>
                </div>   
        );
    }
}
export default withRouter(AboutScreen);