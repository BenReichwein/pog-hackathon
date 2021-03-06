import React, { Component } from 'react'
import {db, SignOut} from "../Firebase/Firebase";
import firebase from "firebase";
export default class Sports extends Component {
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
        fetch("https://opentdb.com/api.php?amount=10&category=21&type=boolean&encode=base64")
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
          }).then(ianIsCool => {
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
                <div className='trivia-container'>
                    <div className='trivia-child'>
                        <button onClick={()=> SignOut()} className={"chat-signout"}> Logout <i className="fas fa-sign-out-alt"/></button>
                        <button onClick={()=> window.location.href="/trivia"} className={"chat-back"}><i className="fas fa-step-backward"/> Back</button>
                        <button className={'play-again'} onClick={() => window.location.reload()}><h1>Play Again</h1></button>
                        <button className={visible ? 'hide' : 'trivia-claim'} onClick={this.claimCoins}>Claim Coins</button>
                        <h2>You earned {correct * 10} coins</h2>
                    </div>
                </div>
            )
        } else {
            return(
                <div className='trivia-container'>
                    <div className='trivia-child'>
                        <button onClick={()=> window.location.href="/trivia"} className={"chat-back"}><i className="fas fa-step-backward"/> Back</button>
                        <button onClick={()=> SignOut()} className={"chat-signout"}> Logout <i className="fas fa-sign-out-alt"/></button>
                        <ul>
                            <h3 className='trivia-question'>{atob(items[questionIndex].question)}</h3>
                            <button className={'trivia-correct'} onClick={this.correct}>{atob(items[questionIndex].correct_answer)}</button>
                            <button className={'trivia-incorrect'} onClick={this.counter}>{atob(items[questionIndex].incorrect_answers)}</button>
                        </ul>
                    </div>
                </div>
            ) 
        }
    }
}
