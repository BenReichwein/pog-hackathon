import {db} from "../Firebase/Firebase";
import firebase from "firebase";

export function ChatBot(text, collection, uid) {
    const messagesRef = db.collection(collection);
    text = text.toLowerCase()
    // eslint-disable-next-line default-case
    switch (text) {
        case '!help':
            say("Here's a list of commands: !info, !trivia, !gamble", messagesRef)
            break;

        case '!info':
            say(`This program is made by Ian and Ben`, messagesRef)
            break;

        case '!trivia':
            say(`Head over to trivia to play some games and earn some coins`, messagesRef)
            break;
    }
}

function say(text, messagesRef) {
    messagesRef.add({
        text: text,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        photoURL: 'https://www.clipartmax.com/png/middle/209-2095497_marketing-web-design-information-icon-icon-speaker.png',
        from: "📌 Info",
    })
}