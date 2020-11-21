import {db} from "../Firebase/Firebase";
import firebase from "firebase";

export function GamblingBot(text, collection, uid) {
    const messagesRef = db.collection(collection);
    const users = db.collection("users").doc(uid.uid)
    // eslint-disable-next-line default-case
    switch (text) {
        case '!gamble':
            say("Gambling Commands: !slot", messagesRef)
            break;

        case '!bal' || '!balance':
            users.get().then(doc => {
                say(`${uid.displayName}'s Balance: $${doc.data().balance}`, messagesRef)
            })
            break;

        case '!cash':
            let reward = Math.floor(Math.random() * 200) + 50;
            users.update({
                balance: reward
            }).then(
                say(`CASH Reward: $${reward}`, messagesRef)
            )
            break;
    }
}

function say(text, messagesRef) {
    messagesRef.add({
        text: text,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQecIxhC0UIERABVxIUJKWRzFEC-TqO2Wfg&usqp=CAU',
        from: "💰 Gamble-o-tron",
    })
}