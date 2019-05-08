import React from 'react'
import {
    withRouter
} from 'react-router-dom';


export class CategoriesScreen extends React.Component {
    render() {
        return (
            <div style = {{textAlign: 'center'}}>
            <div style={{position:"absolute", top:100,left:0}}>
                <div style={{ color: "#4b0082", fontSize: 40,position:"relative",top:-20}}>Catergories</div>
                <div style={{ divAlign: "center",fontSize: 20,padding:10 }}>Glossary of Game categories and definitions.</div>

                <div style={{ divAlign: "center", color: "#4b0082", fontSize: 30}}>Action</div>
                <div style={{fontSize: 20,padding:10}}>Action games emphasize physical challenges that require Hand-eye
                 coordination and motor skill to overcome. They center around the player, who is in control of most of the action.
                  Most of the earliest video games were considered action games; today, it is still a vast genre covering all games
                  that involve physical challenges.</div>

                <div style={{ color: "#4b0082",fontSize: 30 }}>Adventure</div>
                <div style={{fontSize: 20,padding:10}}>Adventure describes a manner of gameplay without reflex challenges or action.
                    They normally require the player to solve various puzzles by interacting with people or the environment,
                    most often in a non-confrontational way. It is considered a "purist" genre and tends to exclude anything which
                    includes action elements beyond a mini game.</div>

                <div style={{ fontSize: 30, color: "#4b0082" }}>Casual</div>
                <div style={{fontSize: 20,padding:10}}>Casual games are designed to be easily picked up and put down again, allowing for potentially short bursts of
                    play, such as Call of Duty and most games on a mobile platform. This genre of gaming is meant to be a short and
                    relaxing pastime, a rest in between other occupations and so is most popular with demographics who have less free
                    time</div>

                <div style={{ fontSize: 30, color: "#4b0082" }}>MMO</div>
                <div style={{fontSize: 20,padding:10}}>A massively multiplayer online game (also called MMO and MMOG) is a multiplayer video game which is
                    capable of supporting large numbers of players simultaneously. By necessity, they are played on the Internet.
                     Many games have at least one persistent world, however others just have large numbers of players competing at
                      once in one form or another without any lasting effect to the world at all.</div>

                <div style={{ fontSize: 30, color: "#4b0082" }}>Party</div>
                <div style={{fontSize: 20,padding:10}}>Party games are video games developed specifically for multiplayer games between many players. Normally,
                    party games have a variety of mini-games that range between collecting more of a certain item than other
                     players or having the fastest time at something.</div>

                <div style={{ fontSize: 30, color: "#4b0082" }}>Progamming</div>
                <div style={{fontSize: 20,padding:10}}>A programming game is a computer game where the player has no direct influence on the course of the game.
                    Instead, a computer program or script is written in some domain-specific programming language in order to
                    control the actions of the characters (usually robots, tanks or bacteria, which seek to destroy each other).
                    </div>


                <div style={{ fontSize: 30, color: "#4b0082" }}>Role-Play</div>
                <div style={{fontSize: 20,padding:10}}>Role-playing video games draw their gameplay from traditional [not always] role-playing games like Dungeons
                     Dragons. Most of these games cast the player in the role of one or more "adventurers" who specialize in
                     specific skill sets (such as melee combat or casting magic spells) while progressing through a predetermined
                     storyline.</div>

                <div style={{ fontSize: 30, color: "#4b0082" }}>Simulation</div>
                <div style={{fontSize: 20,padding:10}}>Simulation video games is a diverse super-category of games, generally designed to closely simulate aspects
                    of a real or fictional reality</div>

                <div style={{ fontSize: 30, color: "#4b0082" }}>Strategy</div>
                <div style={{fontSize: 20,padding:10}}>Strategy video games focus on gameplay requiring careful and skillful thinking and planning in order to
                    achieve victory and the action scales from world domination to squad-based tactics. In most strategy video games,
                    says Andrew Rollings, "the player is given a godlike view of the game world, indirectly controlling the units under
                     his command</div>
                     </div>

            </div>
        );

    }
}
export default withRouter(CategoriesScreen);