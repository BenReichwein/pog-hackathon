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
                    <h2>General</h2>
                    <p style={{marginLeft: '40px'}}>Talk with the community about working out in general</p>
                    <br/>
                    <p style={{marginLeft: '40px'}}>Click here to join</p>
                </button>
                <button onClick={()=> window.location.href='/upperbodychat'} className={'chatroom-button'}>
                    <h2>Upper-Body</h2>
                    <p style={{marginLeft: '40px'}}>Chat about upper-body workouts with the community</p>
                    <br/>
                    <p style={{marginLeft: '40px'}}>Click here to join</p>
                </button>
                <button onClick={()=> window.location.href='/lowerbodychat'} className={'chatroom-button'}>
                    <h2>Lower-Body</h2>
                    <p style={{marginLeft: '40px'}}>Babble with the community about lower-body workouts</p>
                    <br/>
                    <p style={{marginLeft: '40px'}}>Click here to join</p>
                </button>
                <button onClick={()=> window.location.href='/bodybuildingchat'} className={'chatroom-button'}>
                    <h2>Body Building</h2>
                    <p style={{marginLeft: '40px'}}>"Lift" your spirit with the body building community</p>
                    <br/>
                    <p style={{marginLeft: '40px'}}>Click here to join</p>
                </button>
                <button onClick={()=> window.location.href='/weightlosschat'} className={'chatroom-button'}>
                    <h2>Weight Loss</h2>
                    <p style={{marginLeft: '40px'}}>Chit-chat with the weight loss community</p>
                    <br/>
                    <p style={{marginLeft: '40px'}}>Click here to join</p>
                </button>
                <button onClick={()=> window.location.href='/nutritionchat'} className={'chatroom-button'}>
                    <h2>Nutrition</h2>
                    <p style={{marginLeft: '40px'}}>Grab a snack with the nutrition community</p>
                    <br/>
                    <p style={{marginLeft: '40px'}}>Click here to join</p>
                </button>
            </div>
        )
    }
}

export default ChatRooms;