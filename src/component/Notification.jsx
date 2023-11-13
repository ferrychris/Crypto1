import React from 'react'
import {BsFillGiftFill} from 'react-icons/bs'


const Notification = () => {
  return (
    <>
  <div className='hidden md:flex bg-black text-center text-white space-x-3  py-2'>
        <BsFillGiftFill className='ml-[200px] text-yellow-400'/> 
        <p>Register Now- Get up to 100 USDT in Trading free rebate (for verified users)</p>
        <p className='bg-slate-400 ml-1 px-1 font-bold rounded-sm'>Reedeem Gift Card</p>
    </div>
    </>
  )
}

export default Notification