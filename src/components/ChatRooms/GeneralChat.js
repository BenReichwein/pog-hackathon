import React, { Component } from 'react';
import {Message, SignOut, StatusIn} from '../Firebase/Firebase'

class GeneralChat extends Component {
    constructor(props) {
        super(props);
        StatusIn();
    }

    render() {
        return (
            <div className={'chat-box'}>
                <section>
                    <button onClick={()=> window.location.href="/"} className={"chat-back"}><i className="fas fa-step-backward"/> Back</button>
                    <button onClick={()=> SignOut()} className={"chat-signout"}> Logout <i className="fas fa-sign-out-alt"/></button>
                    <center><p className={"chat-category"}>General Chat <i className="fas fa-comment-dots"/></p></center>
                    <Message chat={'general-chat'}/>
                </section>
            </div>
        )
    }
}

export default GeneralChat;