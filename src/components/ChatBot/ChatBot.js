import {db} from "../Firebase/Firebase";
import firebase from "firebase";

export function ChatBot(text, collection, uid) {
    const messagesRef = db.collection(collection);

    // eslint-disable-next-line default-case
    switch (text) {
        case '!help':
            say("Here's a list of commands: !socials, !tutorial, !staff, !trainers", messagesRef)
            break;

        case '!socials':
            say(`@ workoutboostca on Instagram, Facebook, and Twitter`, messagesRef)
            break;

        case '!tutorial':
            say(`Learn more here: https://workoutboost.net/landing`, messagesRef)
            break;

        case '!staff':
            say(`Staff have the 🛡 prefix and Founders have the 👑 prefix`, messagesRef)
            break;

        case '!trainers':
            say(`Trainers/Verified Workout Enthusiast have the ⚡️ prefix`, messagesRef)
            break;
    }
}

function say(text, messagesRef) {
    messagesRef.add({
        text: text,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        from: "⚡️ Workout Boost ⚡️",
    })
}