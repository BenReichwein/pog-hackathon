import React, { Component } from 'react'
import {db} from "../Firebase/Firebase";
import firebase from "firebase";
export default class GeneralTrivia extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          questionIndex: 0,
          correct: 0,
          visible: false
        };
      }
    
      componentWillMount() {
        fetch("https://opentdb.com/api.php?amount=10&type=boolean&encode=base64")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.results
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

      counter = () => {
        this.setState({questionIndex: this.state.questionIndex + 1})
      }
    
      correct = () => {
        this.setState({
            questionIndex: this.state.questionIndex + 1,
            correct: this.state.correct + 1
        })
      }

      claimCoins = () => {
        const { uid } = firebase.auth().currentUser
        const users = db.collection("users").doc(uid)
        return users.get().then(doc => {
          users.update({
            balance: doc.data().balance + this.state.correct * 10
          }).then(r => {
            this.setState({visible: true})
          })
        })
      }

    render() {
        const { error, isLoaded, items, questionIndex, correct, visible } = this.state;
        if(error) {
            return <div>Error: {error}</div>
        } else if(!isLoaded) {
            return <div>Loading...</div>
        } else if(this.state.questionIndex >= 10) {
            return (
                <div>
                    <button onClick={()=> window.location.href="/trivia"} className={"chat-back"}><i className="fas fa-step-backward"/> Back</button>
                    <button onClick={() => window.location.reload()}><h1>Play Again</h1></button>
                    <button className={visible ? 'hide' : 'trivia-claim'} onClick={this.claimCoins}>Claim Coins</button>
                    <h1>You earned {correct * 10} coins</h1>
                </div>
            )
        } else {
            return(
                <div>
                    <button onClick={()=> window.location.href="/trivia"} className={"chat-back"}><i className="fas fa-step-backward"/> Back</button>
                    <ul>
                        <h3>{atob(items[questionIndex].question)}</h3>
                        <button onClick={this.correct}>{atob(items[questionIndex].correct_answer)}</button>
                        <button onClick={this.counter}>{atob(items[questionIndex].incorrect_answers)}</button>
                    </ul>
                </div>
            ) 
        }
    }
}
