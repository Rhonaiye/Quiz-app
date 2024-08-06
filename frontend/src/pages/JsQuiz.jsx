import React, { useContext } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { QuizContext } from './QuizContext';
import Nav from '../components/nav';
import data from '../../../backend/database/data';

const JsQuiz = () => {
  const {
    userName, // Retrieve the username from context
    selectedOption,
    currentIndex,
    score,
    finished,
    CurrentQuestion,
    handleOptionChange,
    handleNext,
    handlePrev,
  } = useContext(QuizContext);
  console.log(userName)
  if (finished) {
    
    return (
      <div className='body bg-red-50 h-[100vh]'>
        <div className='container flex justify-center py-[20%] md:py-[15%] px-4'>
          <div className='body bg-red-100 p-10 text-xl rounded-xl w-[50vh] md:w-3/4'>
            <h1 className='title text-light text-center font-extrabold mb-8 border-b-2 border-b-red-50 pb-2'>
              JAVASCRIPT QUIZ
            </h1>
            <div className='text-center'>
              <h2 className='text-xl font-bold'>Quiz Completed!</h2>
              <p className='text-lg'>Username: {userName}</p> {/* Display the username */}
              <p className='text-lg'>Your Score: {score} / {data.length}</p>
              <p className='text-lg'>{((score / data.length) * 100).toFixed(2)}%</p>
            </div>
          </div>
        </div>
        <Nav />
      </div>
    );
  }

  return (
    <div className='body bg-red-50 h-[100vh]'>
      <div className='container flex justify-center py-[20%] md:py-[15%] px-4'>
        <div className='body bg-red-100 p-10 text-xl rounded-xl w-[50vh] md:w-3/4'>
          <h1 className='title text-light text-center font-extrabold mb-8 border-b-2 border-b-red-50 pb-2'>
            JAVASCRIPT QUIZ
          </h1>
          <div>
            <h1 className='text-center text-sm'>{CurrentQuestion.question}</h1>
            {CurrentQuestion.options.map((option, index) => (
              <div className='flex' key={index}>
                <input
                  type="radio"
                  value={option}
                  name='options'
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                <label className='text-gray-800 text-sm font-light m-2'>{option}</label>
              </div>
            ))}
          </div>
          <div className='flex justify-between mt-10'>
            <div className='flex items-center text-sm font-extrabold bg-red-50 p-2 gap-2 rounded-xl'>
              <FaArrowLeft />
              <button onClick={handlePrev}>Prev</button>
            </div>
            <div className='flex items-center text-sm font-extrabold bg-red-50 p-2 gap-2 rounded-xl'>
              <button onClick={handleNext}>
                {currentIndex < data.length - 1 ? 'Next' : 'Finish'}
              </button>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default JsQuiz;
