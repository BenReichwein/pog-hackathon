import React, { Component } from 'react'

export default class GeneralTrivia extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          questionIndex: 0,
          correct: 0
        };
      }
    
      componentWillMount() {
        fetch("https://opentdb.com/api.php?amount=10&type=boolean&encode=url3986")
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

    render() {
        const { error, isLoaded, items, questionIndex, correct } = this.state;
        if(error) {
            return <div>Error: {error}</div>
        } else if(!isLoaded) {
            return <div>Loading...</div>
        } else if(this.state.questionIndex >= 9) {
            return (
                <div>
                    <button onClick={()=> window.location.href="/trivia"} className={"chat-back"}><i className="fas fa-step-backward"/> Back</button>
                    <button onClick={() => window.location.reload()}><h1>Play Again</h1></button>
                    <h1>You earned {correct * 10} coins</h1>
                </div>
            )
        } else {
            return(
                <div>
                    <button onClick={()=> window.location.href="/trivia"} className={"chat-back"}><i className="fas fa-step-backward"/> Back</button>
                    <ul>
                        <h3>{decodeURI(items[questionIndex].question)}</h3>
                        <button onClick={this.correct}>{items[questionIndex].correct_answer}</button>
                        <button onClick={this.counter}>{items[questionIndex].incorrect_answers}</button>
                    </ul>
                </div>
            ) 
        }
    }
}
