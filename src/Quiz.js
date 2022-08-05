import React, { Component } from 'react' 

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props){
        super(props)
        this.state={quiz_position: 1}
    }
    render() {
      return (
        <div>
            <div className='QuizQuestion'>
               <h2>{quizData.quiz_questions[0].instruction_text}</h2>
            </div>
        </div>
      )
    }
  }
  
  export default Quiz