// Quiz.js
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const inputRef = useRef();

  const handleStartQuiz = () => {
    const userName = inputRef.current.value.trim();
    if (userName) {
      localStorage.setItem('userName', userName);
    } else {
      alert("Please enter a username.");
    }
  };

  return (
    <div className='body bg-red-50 h-[100vh]'>
      <div className='container flex justify-center py-[20%] md:py-[15%]'>

        <div className='body bg-red-100 p-10 text-xl rounded-xl'>
          <h1 className='title text-light text-center font-extrabold mb-8 border-b-2 border-b-red-50 pb-2'>JAVASCRIPT QUIZ</h1>

          <ol>
            <li className='text-gray-800 text-sm font-bold m-2'>• You will be asked a compilation of 15 questions</li>
            <li className='text-gray-800 text-sm font-bold m-2'>• 10 Points are awarded for each correct answer</li>
            <li className='text-gray-800 text-sm font-bold m-2'>• Each Question has three options. You can choose only one option</li>
            <li className='text-gray-800 text-sm font-bold m-2'>• You can review your answers before you finish the quiz</li>
            <li className='text-gray-800 text-sm font-bold m-2'>• Result will be displayed at the end of the quiz</li>
          </ol>

          <div className='flex justify-center w-full mt-6 items-center gap-6'>
            <form id="form">
              <input
                type="text"
                ref={inputRef}
                placeholder='Username*'
                className='p-2 md:pl-4 w-full rounded-md text-md text-black border-[1px] border-red-50'
              />
            </form>

            <div>
              <Link to="/JS QUIZ">
                <button className='bg-red-200 p-2 px-5 rounded-md font-bold' onClick={handleStartQuiz}>
                  Start
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Quiz;
