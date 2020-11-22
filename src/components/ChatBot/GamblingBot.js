import {db} from "../Firebase/Firebase";
import firebase from "firebase";
// eslint-disable-next-line no-unused-vars
import React from "react";

export function GamblingBot(text, collection, uid) {
    const messagesRef = db.collection(collection);
    const users = db.collection("users").doc(uid.uid)
    const jackpot = db.collection("gamble").doc('jackpot')
    text = text.toLowerCase()
    // eslint-disable-next-line default-case
    switch (text) {
        case '!gamble':
            say("Gambling Commands: !bal, !cash, !slot, !ticket, !jackpot, !jackpotroll", messagesRef)
            break;

        case '!bal' || '!balance':
            users.get().then(doc => {
                say(`${uid.displayName}'s Balance: $${doc.data().balance}`, messagesRef)
            })
            break;

        case '!cash':
            let reward = Math.floor(Math.random() * 1000) + 500;
            users.update({
                balance: firebase.firestore.FieldValue.increment(reward)
            }).then(
                say(`CASH Reward: $${reward}`, messagesRef)
            )
            break;

        case text:
            // Slot Machine
            let str = text.split(" ")
            if (str[0] === "!slot" && str[1] > 0) {
                users.get().then(doc => {
                    if (doc.data().balance > 0) {
                        let reward = str[1] * 3
                        let chance = Math.floor(Math.random() * 2);
                        if (chance === 1) {
                            users.update({
                                balance: firebase.firestore.FieldValue.increment(reward)
                            }).then(
                                say(`SLOT MACHINE: 🍒 | 🍒 | 🍒 : WINNER! - Prize: ${reward}`, messagesRef)
                            )
                        } else {
                            users.update({
                                balance: firebase.firestore.FieldValue.increment(-str[1])
                            }).then(
                                say(`SLOT MACHINE: 🍇 | 🍒 | 🍌 : LOSER :/ - Play again`, messagesRef)
                            )
                        }
                    } else {
                        say(`Insufficient Funds - Balance: $${doc.data().balance}`, messagesRef)
                    }
                })
            } else if (str[0] === "!slot") {
                say(`[ERROR] - Proper use !slot [amount]`, messagesRef)
            }

            // Jackpot
            if (str[0] === "!ticket" && str[1] > 0) {
                users.get().then(doc => {
                    if (doc.data().balance >= 1000) {
                        users.update({
                            balance: doc.data().balance - str[1] * 1000
                        }).then(r => {
                            jackpot.get().then(doc => {
                                jackpot.update({
                                    value: doc.data().value + str[1] * 1000,
                                    players: firebase.firestore.FieldValue.arrayUnion(`${uid.uid}`)
                                }).then(r => {
                                    say(`Jackpot Tickets -|- Purchased: ${str[1]}`, messagesRef)
                                })
                            })
                        })
                    } else {
                        say(`Insufficient Funds - Balance: $${doc.data().balance}`, messagesRef)
                    }
                })
            } else if (str[0] === "!jackpotroll") {
                jackpot.get().then(doc => {
                    let random = doc.data().players[Math.floor(Math.random() * doc.data().players.length)];
                    let winner = db.collection("users").doc(`${random}`);
                    winner.update({
                        balance: firebase.firestore.FieldValue.increment(doc.data().value)
                    })
<<<<<<< HEAD
                    if(!random.length) {
=======
                    if(!random) {
>>>>>>> 428f7f6c037f797043d13e6f143faacb8ce05194
                        say(`Currently no jackpot entries`, messagesRef)
                    } else {
                        say(`WINNER OF THE $${doc.data().value} JACKPOT IS!...`, messagesRef)
                        winner.get().then(doc => {
                            say(`${doc.data().username}!!!!`, messagesRef)
                        }).then(r => {
                            jackpot.set({
                                value: 0,
                                players: [],
                            })
                        })
                    }
                })
            } else if (str[0] === "!jackpot") {
                jackpot.get().then(doc => {
                    say(`Buy tickets to have a chance at winning all the $$$! Buy tickets by doing !ticket [amount of tickets] -|- $1,000 per ticket -|- Jackpot Value: $${doc.data().value}`, messagesRef)
                })
            }
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