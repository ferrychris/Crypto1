import React from 'react'
import binancelogo from '../images/binancelogo.svg'
import { Link } from 'react-router-dom'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import { BsFillGiftFill } from 'react-icons/bs'
import { MdFontDownload } from 'react-icons/md'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { CgMenuGridR } from 'react-icons/cg'
import { useState } from 'react'
import url from './Coinapi'
const Navbar = () => {
    return (
        <>
            <div className='md:flex space-x-5 container ml-2 mt-1 justify-evenly'>
                <div className='flex'>

                    <img src={binancelogo} alt="binancelogo" className='w-[100px] h-[60px] ' />
                    <div >
                    <CgMenuGridR className='mt-5 text-2xl ml-2' />
                
                    </div>
                   
                </div>
                <div className='block float-right -mt-8 md:flex md:mt-2 space-x-3'>
                    
                    <div className='md:hidden sm:hidden lg: hidden'>
                          <AiOutlineMenu className='text-2xl cursor-pointer absolute'/>
                  <AiOutlineClose className='text-2xl cursor-pointer '/>
                    </div>
                
                    <div className='flex relative pr-8'> 
                        <li>
                            Buy Crypto
                        </li>
                        <div className='bg-yellow-400 px-[1px] absolute ml-[90px] rounded-md'>
                            <p className='text-[10px]' >Euro</p>
                        </div>

                        
                    </div>
                    <li>Market</li>
                    <div className='flex'>
                        <li>
                            Trade
                        </li>
                        
                    </div>
                    <div className='flex'>
                        <li>
                            Derivatives
                        </li>
                        <IoIosArrowDropdownCircle className='text-xs mt-2 text-yellow-400 hover:cursor-pointer' />
                    </div>
                    <div className='flex'>
                        <li>
                            Earn
                        </li>
                        <IoIosArrowDropdownCircle className='text-xs mt-2 text-yellow-400 hover:cursor-pointer' />
                    </div>

                    <li>NFT</li>
                    <div className='flex'>
                        <li className=''>
                            Institutional
                        </li>
                        <IoIosArrowDropdownCircle className='text-xs mt-2 text-yellow-400 hover:cursor-pointer' />
                    </div>
                    <li>Feed</li>
                </div>
                <div className='hidden md:block '>
                    <button className='bg-yellow-400 px-3 mt-2 py-2 hover:bg-green-100  rounded -py-1 text-1xl flex relative'>
                        <BsFillGiftFill className='text-xs mt-1 mr-1 hover:cursor-pointer ' />
                        Register
                    </button>
                </div>
                
            </div>
        </>
    )
}

export default Navbar
