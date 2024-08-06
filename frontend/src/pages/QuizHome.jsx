import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight,} from 'react-icons/fa';
import Nav from '../components/nav';

const QuizHome = ()=>{
  return (
    <div className='h-[140vh] md:h-[100vh] bg-[#0d0d27] text-white p-5'>
        <p className='text-center font-extrabold text-xl md:hidden'>Hello user, choose a quiz</p>
       <div className='flex flex-col md:flex-row justify-center gap-10 items-center mt-[15%]'>

          <div className='bg-blue-950 w-full md:w-1/4 md:h-[40vh] h-[20vh] rounded-xl p-2 pl-5 pt-5' >
                 <p className='text-2xl font-bold'>Javascipt quiz</p>
                <p className='text-sm font-light my-2'>simple Javascipt quiz to test your intel</p>
                <Link to="/Javascript Quiz" > <FaArrowRight/> </Link>
            </div>

            <div className='bg-blue-950 w-full md:w-1/4 md:h-[40vh] h-[20vh] rounded-xl p-2 pl-5'>
                <p className='text-2xl font-bold'>Css  quiz</p>
                <p className='text-sm font-light my-2'>Coming soon</p>
                <FaArrowRight/>
            </div>

            <div className='bg-blue-950 w-full md:w-1/4 md:h-[40vh] h-[20vh] rounded-xl p-2 pl-5'>
                <p className='text-2xl font-bold'>React quiz</p>
                <p className='text-sm font-light my-2'>Coming soon</p>
                <FaArrowRight/>
            </div>

            <div className='bg-blue-950 w-full md:w-1/4 md:h-[40vh] h-[20vh] rounded-xl p-2 pl-5'>
                <p className='text-2xl font-bold'>Html quiz</p>
                <p className='text-sm font-light my-2'>Coming soon</p>
                <FaArrowRight/>
            </div>
       </div>
       <Nav/>
    </div>
  )
}

export default QuizHome