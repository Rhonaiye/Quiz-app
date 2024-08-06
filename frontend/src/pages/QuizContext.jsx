import React, { createContext, useState } from 'react';
import data from '../../../backend/database/data';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [userName, setUsername] = useState(''); // Added state for username
  const [selectedOption, setSelectedOption] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const CurrentQuestion = data[currentIndex];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNext = () => {
    if (selectedOption) {
      if (selectedOption === CurrentQuestion.options[CurrentQuestion.correctAnswerIndex]) {
        const newScore = score + 1;
        setScore(newScore);
        localStorage.setItem('quizScore', newScore);
      }
      setUserAnswers([...userAnswers, selectedOption]);
      if (currentIndex < data.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setSelectedOption('');
      } else {
        setFinished(true);
        localStorage.setItem('quizFinished', 'true');
      }
    } else {
      alert('Please select an option before proceeding.');
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedOption(userAnswers[currentIndex - 1]);
    }
  };

  return (
    <QuizContext.Provider
      value={{
        userName,
        setUsername, // Provide setUsername function to allow updating the username
        selectedOption,
        currentIndex,
        score,
        finished,
        CurrentQuestion,
        handleOptionChange,
        handleNext,
        handlePrev,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
