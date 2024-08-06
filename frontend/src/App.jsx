// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Quiz from './pages/startJsQuiz';
import QuizHome from './pages/QuizHome';
import JsQuiz from './pages/JsQuiz';
import { QuizProvider } from './pages/QuizContext';
import Nav from './components/nav';

function App() {
  return (
    <QuizProvider>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Javascript Quiz' element={<Quiz />} />
        <Route path='/Quiz' element={<QuizHome />} />
        <Route path='/JS QUIZ' element={<JsQuiz />} />
      </Routes>
    </QuizProvider>
  );
}

export default App;

