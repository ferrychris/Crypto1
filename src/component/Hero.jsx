import React from 'react'
import { BsFillGiftFill } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { DiApple } from 'react-icons/di'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BsArrowDownRight, BsArrowUpRight, BsArrowDownRightSquare } from 'react-icons/bs'



const Mainbody = () => {
    const [data, newData] = useState([])
    const details = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en"
    useEffect(() => {
        axios.get(details).then((response) => {
            newData(response.data)
            console.log(details)
            console.log(data)
        }).catch((error) => (
            console.log(error)
        ))

    }, [])



    return (


        <div className='ml-[30px] flex flex-wrap mt-[70px]'>

            <div className='space-y-4'>
                <div>
                    <span className='text-2xl md:text-5xl text-yellow-400   font-bold'>
                        Buy, Trade, and Hold 350+,
                    </span><br />
                    <p className='
                    text-5xl font-bold '>  Cryptocurrencies on Binance
                    </p>
                </div>
                <div className='flex font-bold space-x-2 mt-[30px]'>
                    <BsFillGiftFill className='mt-1 text-yellow-400' />
                    <p>Trade Bitcoin for Free</p>
                </div>
                <div>
                    <input className='py-4 px-7' type='text' placeholder='Email/Phone number' />
                    <button className='py-4 px-4 bg-yellow-400 ml-1 rounded-sm'>Sign up with Email or Phone</button>
                </div>
                <div className='flex'>
                    <hr className='text-black' />
                    <p className='ml-[60px]'>or continue with</p>
                    <hr className='text-black' />
                </div>
                <div className='space-x-4 flex'>
                    <button className='bg-[#EAECEF] px-6 py-3 flex space-x-2  hover:bg-black hover:text-white'><FcGoogle className='text-3xl mb-2' />Google</button>
                    <button className='bg-[#EAECEF] px-6 py-3 flex space-x-2 hover:bg-black hover:text-white '><DiApple className='mt-1 text-3xl' />Apple</button>
                </div>

            </div>
            <div className='space-y-2  ml-[40px] '>
                <table className='space-y-5'>
                    <tr className='flex flex-wrap justify-evenly'>
                        <div className='flex space-x-1'>
                            <td><img src={data[0].image} alt="" className='w-[30px]' /></td>
                            <td><p className='font-bold'>{data[0].symbol.toUpperCase()}</p></td>
                             <td><p className='text-blue-300'>{data[0].name.toUpperCase()}</p></td>

                        </div>
                        <td><p className='font-bold'>${data[0].current_price.toLocaleString()}</p></td>
                        {data[0].price_change_percentage_24hr < 0 ? (
                            <span className='text-red-500 font-bold flex'>
                                <BsArrowDownRight />
                                {data[0].price_change_percentage_24h}%
                            </span> ) :
                            <span className ='green'>
                            <BsArrowDownRight/>
                            {data[0].price_change_percentage_24h}%
                            </span>
                            }
                            
                    </tr>
                    
                    <tr className='flex flex-wrap justify-evenly'>
                        <div className='flex space-x-1'>
                            <td><img src={data[1].image} alt="" className='w-[30px]' /></td>
                            <td><p className='font-bold'>{data[1].symbol.toUpperCase()}</p></td>
                             <td><p className='text-blue-300'>{data[1].name.toUpperCase()}</p></td>

                        </div>
                        <td><p className='font-bold'>${data[1].current_price.toLocaleString()}</p></td>
                        {data[1].price_change_percentage_24hr < 0 ? (
                            <span className='text-red-500 font-bold flex'>
                                <BsArrowDownRight />
                                {data[1].price_change_percentage_24h}%
                            </span> ) :
                            <span className ='green'>
                            <BsArrowDownRight/>
                            {data[1].price_change_percentage_24h}%
                            </span>
                            }
                            
                    </tr>
                    <tr className='flex flex-wrap justify-evenly'>
                        <div className='flex space-x-1'>
                            <td><img src={data[0].image} alt="" className='w-[30px]' /></td>
                            <td><p className='font-bold'>{data[0].symbol.toUpperCase()}</p></td>
                             <td><p className='text-blue-300'>{data[0].name.toUpperCase()}</p></td>

                        </div>
                        <td><p className='font-bold'>${data[2].current_price.toLocaleString()}</p></td>
                        {data[2].price_change_percentage_24hr < 0 ? (
                            <span className='text-red-500 font-bold flex'>
                                <BsArrowDownRight />
                                {data[2].price_change_percentage_24h}%
                            </span> ) :
                            <span className ='green'>
                            <BsArrowDownRight/>
                            {data[2].price_change_percentage_24h}%
                            </span>
                            }
                            
                    </tr>
                    <tr className='flex flex-wrap justify-evenly'>
                        <div className='flex space-x-1'>
                            <td><img src={data[3].image} alt="" className='w-[30px]' /></td>
                            <td><p className='font-bold'>{data[3].symbol.toUpperCase()}</p></td>
                             <td><p className='text-blue-300'>{data[3].name.toUpperCase()}</p></td>

                        </div>
                        <td><p className='font-bold'>${data[3].current_price.toLocaleString()}</p></td>
                        {data[3].price_change_percentage_24hr < 0 ? (
                            <span className='text-red-500 font-bold flex'>
                                <BsArrowDownRight />
                                {data[3].price_change_percentage_24h}%
                            </span> ) :
                            <span className ='green'>
                            <BsArrowDownRight/>
                            {data[3].price_change_percentage_24h}%
                            </span>
                            }
                            
                    </tr>

                    <tr className='flex flex-wrap justify-evenly'>
                        <div className='flex space-x-1'>
                            <td><img src={data[4].image} alt="" className='w-[30px]' /></td>
                            <td><p className='font-bold'>{data[4].symbol.toUpperCase()}</p></td>
                             <td><p className='text-blue-300'>{data[4].name.toUpperCase()}</p></td>

                        </div>
                        <td><p className='font-bold'>${data[4].current_price.toLocaleString()}</p></td>
                        {data[4].price_change_percentage_24hr < 0 ? (
                            <span className='text-red-500 font-bold flex'>
                                <BsArrowDownRight />
                                {data[4].price_change_percentage_24h}%
                            </span> ) :
                            <span className ='green'>
                            <BsArrowDownRight/>
                            {data[4].price_change_percentage_24h}%
                            </span>
                            }
                            
                    </tr>
                    <tr className='flex flex-wrap justify-evenly'>
                        <div className='flex space-x-1'>
                            <td><img src={data[5].image} alt="" className='w-[30px]' /></td>
                            <td><p className='font-bold'>{data[5].symbol.toUpperCase()}</p></td>
                             <td><p className='text-blue-300'>{data[5].name.toUpperCase()}</p></td>

                        </div>
                        <td><p className='font-bold'>${data[5].current_price.toLocaleString()}</p></td>
                        {data[5].price_change_percentage_24hr < 0 ? (
                            <span className='text-red-500 font-bold flex'>
                                <BsArrowDownRight />
                                {data[5].price_change_percentage_24h}%
                            </span> ) :
                            <span className ='green'>
                            <BsArrowDownRight/>
                            {data[5].price_change_percentage_24h}%
                            </span>
                            }
                            
                    </tr>
                </table>
                <div className='bg-yellow-100 relative flex cursor-pointer rounded-lg hover:bg-slate-600 p-3'>
                    <button className='text-1xl'>View all 100+ Coins </button>
                    <BsArrowDownRightSquare className='mt-1 ml-3 text-2xl' />
                </div>
            </div>
            <div>

            </div>
        </div>

    )
}

export default Mainbody