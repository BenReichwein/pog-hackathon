import firebase from 'firebase';
import React, {useRef, useEffect, useState} from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {ChatBot} from "../ChatBot/ChatBot";
import {GamblingBot} from "../ChatBot/GamblingBot";

// Config for firebase
const config = {
    apiKey: "AIzaSyA-lmmE1oZOsw3smOMm0ZtpZQh4zgN7Dt8",
    authDomain: "pog-hackathon.firebaseapp.com",
    databaseURL: "https://pog-hackathon.firebaseio.com",
    projectId: "pog-hackathon",
    storageBucket: "pog-hackathon.appspot.com",
    messagingSenderId: "318598557415",
    appId: "1:318598557415:web:6251a139ff7dd96380fc42",
    measurementId: "G-LV8KT1L10Q"
};

firebase.initializeApp(config);

let db = firebase.firestore();

export { db, firebase as default };

// Checks if the user is online
export function StatusIn() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
            alert("You are not logged in")
            window.location.href = '/login';
        }
    });
}

// Sign out button
export function SignOut() {
    firebase.auth().signOut().then(function() {
        window.location.href='/';
    }).catch(function(error) {
        alert(error)
    });
}

// Deletes document in database
export function DeleteDoc(collection, doc, notify) {
    db.collection(collection).doc(doc).delete().then(function() {
        if (notify === true) {
            alert("Successfully deleted workout!");
        }
        window.location.reload();
    }).catch(function(error) {
        alert("Error removing document: " + error);
    });
}

// Messages
export function Message(props) {
    const refs = useRef(null);
    const messagesRef = db.collection(props.chat);
    const query = messagesRef.orderBy('createdAt');

    const [messages] = useCollectionData(query, { idField: 'id' });

    const [formValue, setFormValue] = useState('');

    useEffect(() => {
        refs.current.scrollIntoView({behavior: 'smooth'})
    })

    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoURL } = firebase.auth().currentUser;

        // Black listed words filter
        let blacklisted = ['fuck', 'bitch', 'nigger', 'nigga', 'pussy', 'cunt', 'clit'];
        let foundInText = false;
        for (let i in blacklisted) {
            if (formValue.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
        }
        if (foundInText) {
            alert("Please do not use swear words");
            setFormValue('');
        } else {
            await messagesRef.add({
                text: formValue,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                photoURL,
                from: firebase.auth().currentUser.displayName,
            })

            setFormValue('');
            refs.current.scrollIntoView({ behavior: 'smooth' });
        }

        // Chat Bot commands
        ChatBot(formValue, props.chat, firebase.auth().currentUser,)
        GamblingBot(formValue, props.chat, firebase.auth().currentUser,)
    }

    return (<>
        <main>

            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} collection={props.chat} />)}

            <span ref={refs}/>

        </main>

        <form className={'chat'} onSubmit={sendMessage}>

            <input className={'chat-send'} value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Send a message" />

            <button className={'chat-button'} type="submit" disabled={!formValue}><i className="fas fa-paper-plane"/></button>

        </form>
    </>)
}

// Display Messages
function ChatMessage(props) {
    const { text, uid, from, photoURL } = props.message;
    const messageClass = uid === firebase.auth().currentUser.uid ? 'sent' : 'received';

    return (<div style={{display: "block"}}>
        <p className={`username-${messageClass}`}>{from}</p>
        <div className={`message ${messageClass}`}>
            <img alt='profile' className={'pfp'} src={photoURL || 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'} />
            <p className={'chat-message'}>{text}</p>
        </div>
    </div>)
}