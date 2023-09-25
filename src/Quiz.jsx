//The useState is a React hook used to manage states in React
import { useState } from "react";
import {resultInitialState} from './constants'
//{questions} is used as a parameter to get the questions from constants.js'
const Quiz = ({ questions }) => {
  //We ae iniializing several states 
  const [currentQuestion, setCurrentQuestion] = useState(0) //Initialize the numbering
  const [answerIndex, setAnswerIndex] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result,setResult]=useState(resultInitialState);
  const [showResult,setShowResult]=useState(false)

  //Lets destructure to have some features from the questions
  const { question, type, choices, correctAnswer } = questions[currentQuestion]; //This is like getting the first concept

  //Here we have the function that listens for an AnswerClick
  const onAnswerClick = (choice, index) => { //Collects the right choice and its index eg 1,2,3
    setAnswerIndex(index);
    if (choice === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const onClickNext=()=>{
    setAnswerIndex(null);
    setResult((prev)=>
    answer?{
      ...prev,
      score:prev.score+5,
      correctAnswers:prev.correctAnswers+1
    }:{
      ...prev,
      wrongAnswers:prev.wrongAnswers+1
    });


   //Now we need o move to the next question after the next button is clicked 
   if(currentQuestion !== questions.length-1)
   {
    setCurrentQuestion((prev)=>prev+1)

   }else{
    setCurrentQuestion(0) //This returns to the first question
    setShowResult(true) //here we want to show the result 



   }

   //To allow the user try again 
   const onTryAgain=()=>{
    setResult(resultInitialState)
    setShowResult(false)
   }

  

  }
  return (
    <div className="quiz-container">
      <h3>Quiz Application </h3>
      <hr />
     {/* We apply a ternary operator here */}
     
     {!showResult ?( 
       <>
      <span className="active-question-no">{currentQuestion + 1}</span>
      <span className="total-question">/{questions.length}</span>
      <h2>{question}</h2>
      <ul>
        {choices.map((choice, index) => (
          <li
            key={index}
            //We create a function 'onAnswerClick' that takes two parameters and listens for a click event
            onClick={() => onAnswerClick(choice, index)}
            //Below we ensure any option clicked can be highlighted , the answerIndex is already set with the function above 

            
            className={answerIndex === index ? "selected-answer" : null}
           
         
          >
        
              
            {choice}
          </li>
        ))}
      </ul>
      <div className='bottom'>
          <button onClick={onClickNext} disabled={answerIndex===null}>
              {currentQuestion === questions.length -1 ? "Finished":"Next"}
          </button>

      </div>
    </>):<div className='result'>
      <h3> Result Display </h3>
      <p> 
        Total Questions : <span> {questions.length}</span>
      </p>
      <p>
        Total Score: <span> {result.length} </span>
      </p>
      <p>
        Total Questions : <span> {questions.length} </span>
      </p>
      <p>
       Correct Answers  : <span> {result.correctAnswers} </span>
      </p>
      <p>
       Wrong Answers  : <span> {result.wrongAnswers} </span>
      </p>
<button onClick={onTryAgain}>
  Try again ?
  </button>
      </div>
      }
    
    </div>
  
  );
};

export default Quiz;
