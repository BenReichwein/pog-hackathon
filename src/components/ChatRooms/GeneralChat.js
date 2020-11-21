import React, { Component } from 'react';
import { Message, StatusIn } from '../Firebase/Firebase'
import './ChatRooms.css'

class GeneralChat extends Component {
    constructor(props) {
        super(props);
        StatusIn();
    }

    render() {
        return (
            <div className={'chat-box'}>
                <section>
                    <button onClick={()=> window.location.href="/chatrooms"} className={"chat-back"}><i className="fas fa-step-backward"/> Back</button>
                    <center><p className={"chat-category"}>General Chat <i className="fas fa-comment-dots"/></p></center>
                    <Message chat={'general-chat'}/>
                </section>
            </div>
        )
    }
}

export default GeneralChat;