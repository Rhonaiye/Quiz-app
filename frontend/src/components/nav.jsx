import React from 'react'
import { Link } from 'react-router-dom'
import { MdHome } from 'react-icons/md'; 
import { FaUser } from 'react-icons/fa';

const Nav = ()=>{
  return (
    <div className='flex justify-evenly bg-[#525a8a] fixed bottom-0 left-0 right-0 pb-7 items-center p-5 md:hidden'>
    <Link to="/"> <MdHome size={24}/> </Link>
    <p className='text-xl font-extrabold'>Quizy</p>
   <button> <FaUser/> </button>
    </div>
  )
}

export default Nav