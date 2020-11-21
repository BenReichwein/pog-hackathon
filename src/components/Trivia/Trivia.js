import React, { Component } from 'react'

export default class Trivia extends Component {
    render() {
        return (
            <div>
                <button onClick={()=> window.location.href="/"} className={"chat-back"}><i className="fas fa-step-backward"/> Back</button>
                <h4 className={"spotlight-title"}>
                    Categories
                </h4>
                <button onClick={()=> window.location.href='/generalTrivia'} className={'chatroom-button'}>
                    <h2 style={{marginLeft: '20px'}}>General Category</h2>
                    <p style={{marginLeft: '40px'}}>Play some trivia to earn coins and use them in the chat rooms</p>
                    <br/>
                    <p style={{marginLeft: '40px'}}>Click here to play</p>
                </button>
            </div>
        )
    }
}
