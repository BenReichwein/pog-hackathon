import {db} from "../Firebase/Firebase";
import firebase from "firebase";

export function ChatBot(text, collection, uid) {
    const messagesRef = db.collection(collection);
    const users = db.collection("users").doc(uid.uid)
    users.get().then(doc => {
        if (!doc.data().username) {
            users.set({
                username: uid.uid,
                balance: 200,
            }).then(r => console.log('Updated Database'))
        }
    })
    // eslint-disable-next-line default-case
    switch (text) {
        case '!help':
            say("Here's a list of commands: !info, !trivia, !gamble", messagesRef)
            break;

        case '!info':
            say(`This program is made by Ian and Ben`, messagesRef)
            break;
    }
}

function say(text, messagesRef) {
    messagesRef.add({
        text: text,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        photoURL: 'https://www.clipartmax.com/png/middle/209-2095497_marketing-web-design-information-icon-icon-speaker.png',
        from: "📌 Info-bimbo️",
    })
}