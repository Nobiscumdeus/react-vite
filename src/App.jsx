import { useState } from 'react'
import './App.css'
//We are geeting our main Quiz application here 
import Quiz from './Quiz' 
//We are getting the Question pool from the constants.js file
import {QuestionPool} from './constants.js'
import './index.scss'

function App() {


  return (
    <>
    {/* We are collecting the questions and passing it as a property into the Quiz App being displayed here */}
    -
  
    <Quiz questions={QuestionPool.questions}/>
     
    </>
  )
}

export default App


