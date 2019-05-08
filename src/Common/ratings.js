import React from 'react'
import {
    withRouter
} from 'react-router-dom';


export class RatingsScreen extends React.Component {
    render() {
        return (
            <div style = {{textAlign: 'center'}}>
            <div style={{position:"absolute", top:100,left:0}}>
                <div style={{ color: "#4b0082", fontSize: 40,position:"relative",top:-20}}>ESRB RATINGS GUIDE</div>
                <div style={{ divAlign: "center",fontSize: 20,padding:10 }}>The Entertainment Software Rating Board (ESRB) 
                    ratings provide concise and objective information about the content in video games and 
                    apps so consumers, especially parents, can make informed choices. ESRB ratings have three parts:
                    Rating Categories suggest age appropriateness
                    Content Descriptors indicate content that may have 
                    triggered a particular rating and/or may be of interest or concern.</div>

                <div style={{ divAlign: "center", color: "#4b0082", fontSize: 30}}>Everyone</div>
                <div style={{fontSize: 20,padding:10}}>Content is generally suitable for all ages. May contain minimal cartoon, 
                    fantasy or mild violence and/or infrequent use of mild language.</div>

                <div style={{ color: "#4b0082",fontSize: 30 }}>Everyone 10+</div>
                <div style={{fontSize: 20,padding:10}}>Content is generally suitable for ages 10 and up. May contain more cartoon, fantasy 
                    or mild violence, mild language and/or minimal suggestive themes.</div>

                <div style={{ fontSize: 30, color: "#4b0082" }}>Teen</div>
                <div style={{fontSize: 20,padding:10}}>Content is generally suitable for ages 13 and up. May contain violence, suggestive themes, crude humor, minimal blood, 
                    simulated gambling and/or infrequent use of strong language.</div>

                <div style={{ fontSize: 30, color: "#4b0082" }}>Mature</div>
                <div style={{fontSize: 20,padding:10}}>Content is generally suitable for ages 17 and up. May contain intense violence, 
                    blood and gore, sexual content and/or strong language.</div>

                <div style={{ fontSize: 30, color: "#4b0082" }}>Rating Pending</div>
                <div style={{fontSize: 20,padding:10}}>Not yet assigned a final ESRB rating. Appears only in advertising, marketing and promotional materials related to a 
                    physical (e.g., boxed) video game that is expected to carry an ESRB rating, 
                    and should be replaced by a game's rating once it has been assigned.</div>

                
            </div>
            </div>
        );

    }
}
export default withRouter(RatingsScreen);