import React, { Component } from 'react';
import { StatusIn } from '../Firebase/Firebase'
import './ChatRooms.css'

class ChatRooms extends Component {
    constructor(props) {
        super(props);
        StatusIn();
    }

    render() {
        return (
            <div>
                <br />
                <div className={"spotlight"}>
                    <h4 className={"spotlight-title"}>
                        CHAT ROOMS
                    </h4>
                    <br/>
                    <div className={"postdesc"}>
                        • A place to ask workout related questions<br/>
                        • Talk about good workout techniques and learn new things<br/>
                    </div>
                    <h4 className={"spotlight-title"}>
                        RULES
                    </h4>
                    <div className={"postdesc"}>
                        • Be nice and respectful<br/>
                        • Do not swear, spam, or annoy<br/><br/>
                        <span style={{color: '#FF6347'}}>If these rules are broken you will be banned</span>
                    </div>
                    <br/>
                    <br/>
                </div>
                <button onClick={()=> window.location.href='/generalchat'} className={'chatroom-button'}>
                    <h2 style={{marginLeft: '20px'}}>General Chat</h2>
                    <p style={{marginLeft: '40px'}}>Talk with the community about working out in general</p>
                    <br/>
                    <p style={{marginLeft: '40px'}}>Click here to join</p>
                </button>
                <button onClick={()=> window.location.href='/trivia'} className={'trivia-button'}>
                    <h2 style={{marginLeft: '20px'}}>Play Trivia</h2>
                    <p style={{marginLeft: '40px'}}>Play some trivia to earn coins and use them in the chat rooms</p>
                    <br/>
                    <p style={{marginLeft: '40px'}}>Click here to play</p>
                </button>
            </div>
        )
    }
}

export default ChatRooms;