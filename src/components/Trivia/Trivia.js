import React, { Component } from 'react'
import {SignOut} from '../Firebase/Firebase'
import './Trivia.css'
export default class Trivia extends Component {
    render() {
        return (
            <div>
                <button onClick={()=> SignOut()} className={"chat-signout"}> Logout <i className="fas fa-sign-out-alt"/></button>

                <br />
                <button onClick={()=> window.location.href="/"} className={"chat-back"}><i className="fas fa-step-backward"/> Back</button>
                <h1 className={"spotlight-title"}>
                    Categories
                </h1>
                <button onClick={()=> window.location.href='/generalTrivia'} className={'trivia-button'}>
                    <h2 style={{marginLeft: '20px'}}>General Trivia</h2>
                    <p style={{marginLeft: '40px'}}>Play some trivia to earn coins and use them in the chat rooms</p>
                    <br/>
                    <p style={{marginLeft: '40px'}}>Click here to play</p>
                </button>
                <button onClick={()=> window.location.href='/vehicles'} className={'trivia-button'}>
                    <h2 style={{marginLeft: '20px'}}>Vehicle Trivia</h2>
                    <p style={{marginLeft: '40px'}}>Play some trivia to earn coins and use them in the chat rooms</p>
                    <br/>
                    <p style={{marginLeft: '40px'}}>Click here to play</p>
                </button>
                <button onClick={()=> window.location.href='/sports'} className={'trivia-button'}>
                    <h2 style={{marginLeft: '20px'}}>Sports Trivia</h2>
                    <p style={{marginLeft: '40px'}}>Play some trivia to earn coins and use them in the chat rooms</p>
                    <br/>
                    <p style={{marginLeft: '40px'}}>Click here to play</p>
                </button>
                <button onClick={()=> window.location.href='/mythology'} className={'trivia-button'}>
                    <h2 style={{marginLeft: '20px'}}>Mythology Trivia</h2>
                    <p style={{marginLeft: '40px'}}>Play some trivia to earn coins and use them in the chat rooms</p>
                    <br/>
                    <p style={{marginLeft: '40px'}}>Click here to play</p>
                </button>
                <button onClick={()=> window.location.href='/film'} className={'trivia-button'}>
                    <h2 style={{marginLeft: '20px'}}>Film Trivia</h2>
                    <p style={{marginLeft: '40px'}}>Play some trivia to earn coins and use them in the chat rooms</p>
                    <br/>
                    <p style={{marginLeft: '40px'}}>Click here to play</p>
                </button>
                <button onClick={()=> window.location.href='/videogames'} className={'trivia-button'}>
                    <h2 style={{marginLeft: '20px'}}>Video Game Trivia</h2>
                    <p style={{marginLeft: '40px'}}>Play some trivia to earn coins and use them in the chat rooms</p>
                    <br/>
                    <p style={{marginLeft: '40px'}}>Click here to play</p>
                </button>
            </div>
        )
    }
}
