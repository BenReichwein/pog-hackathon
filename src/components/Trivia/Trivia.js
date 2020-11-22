import React, { Component } from 'react'

export default class Trivia extends Component {
    render() {
        return (
            <div>
                <br />
                <button onClick={()=> window.location.href="/"} className={"chat-back"}><i className="fas fa-step-backward"/> Back</button>
                <h1 className={"spotlight-title"}>
                    Categories
                </h1>
                <button onClick={()=> window.location.href='/generalTrivia'} className={'chatroom-button'}>
                    <h2 style={{marginLeft: '20px'}}>General Trivia</h2>
                    <p style={{marginLeft: '40px'}}>Play some trivia to earn coins and use them in the chat rooms</p>
                    <br/>
                    <p style={{marginLeft: '40px'}}>Click here to play</p>
                </button>
                <button onClick={()=> window.location.href='/vehicles'} className={'chatroom-button'}>
                    <h2 style={{marginLeft: '20px'}}>Vehicle Trivia</h2>
                    <p style={{marginLeft: '40px'}}>Play some trivia to earn coins and use them in the chat rooms</p>
                    <br/>
                    <p style={{marginLeft: '40px'}}>Click here to play</p>
                </button>
                <button onClick={()=> window.location.href='/sports'} className={'chatroom-button'}>
                    <h2 style={{marginLeft: '20px'}}>Sports Trivia</h2>
                    <p style={{marginLeft: '40px'}}>Play some trivia to earn coins and use them in the chat rooms</p>
                    <br/>
                    <p style={{marginLeft: '40px'}}>Click here to play</p>
                </button>
                <button onClick={()=> window.location.href='/mythology'} className={'chatroom-button'}>
                    <h2 style={{marginLeft: '20px'}}>Mythology Trivia</h2>
                    <p style={{marginLeft: '40px'}}>Play some trivia to earn coins and use them in the chat rooms</p>
                    <br/>
                    <p style={{marginLeft: '40px'}}>Click here to play</p>
                </button>
                <button onClick={()=> window.location.href='/film'} className={'chatroom-button'}>
                    <h2 style={{marginLeft: '20px'}}>Film Trivia</h2>
                    <p style={{marginLeft: '40px'}}>Play some trivia to earn coins and use them in the chat rooms</p>
                    <br/>
                    <p style={{marginLeft: '40px'}}>Click here to play</p>
                </button>
                <button onClick={()=> window.location.href='/videogames'} className={'chatroom-button'}>
                    <h2 style={{marginLeft: '20px'}}>Video Game Trivia</h2>
                    <p style={{marginLeft: '40px'}}>Play some trivia to earn coins and use them in the chat rooms</p>
                    <br/>
                    <p style={{marginLeft: '40px'}}>Click here to play</p>
                </button>
            </div>
        )
    }
}
