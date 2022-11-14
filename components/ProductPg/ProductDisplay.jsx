import React from 'react'
import { AiFillStar, AiOutlinePlus, AiOutlineMinus, AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

function ProductDisplay() {
    return (
        <div className='grid grid-cols-2 gap-4 mx-auto w-[90%] mt-6 mb-6'>

            <div className='flex flex-col gap-4 '>
                <div className='p-3 rounded ' >
                    <img src='https://i.imgur.com/Y8ogoO2.png' className='mx-auto h-[400px] w-[350px] object-contain group-hover:cursor-pointer group-hover:sepia duration-500 ease-linear 	  ' />

                </div>

                <div className='flex gap-6 items-center ml-4 mr-3'>
                    <div className='border-2 border-black rounded-lg bg-[#fff0b6] p-4 flex items-center justify-center'>
                        <AiOutlineArrowLeft size={24} />
                    </div>
                    <div className='border-2 border-black rounded-lg bg-[#fff0b6] p-4 flex items-center justify-center'>
                        <AiOutlineArrowRight size={24} />
                    </div>
                    <div className='border-2 border-black rounded-lg bg-white p-4 flex items-center justify-center'>
                        <img src='https://i.imgur.com/Y8ogoO2.png' className='mx-auto h-[30px] w-[30px] object-contain group-hover:cursor-pointer group-hover:sepia duration-500 ease-linear 	  ' />
                    </div>
                    <div className='border-2 border-black rounded-lg bg-white p-4 flex items-center justify-center'>
                        <img src='https://i.imgur.com/Y8ogoO2.png' className='mx-auto h-[30px] w-[30px] object-contain group-hover:cursor-pointer group-hover:sepia duration-500 ease-linear 	  ' />
                    </div>
                    <div className='border-2 border-black rounded-lg bg-white p-4 flex items-center justify-center'>
                        <img src='https://i.imgur.com/Y8ogoO2.png' className='mx-auto h-[30px] w-[30px] object-contain group-hover:cursor-pointer group-hover:sepia duration-500 ease-linear 	  ' />
                    </div>


                </div>
            </div>

            <div className='flex flex-col gap-0 '>

                <div className='mb-3'>
                    <h1 className='text-black font-extrabold uppercase tracking-widest text-2xl font-sans'>Dior Sauvage</h1>
                </div>


                <div className='flex items-center gap-4 mb-3'>
                    <div className='bg-black p-1 rounded-xl '>
                        <p className='text-white font-space flex gap-2 items-center pr-1 pl-1'>
                            <AiFillStar size={20} color='orange' />
                            4.8
                        </p>
                    </div>

                    <div className=''>
                        <p className='font-space text-cyan-700 underline underline-offset-4'>149 Reviews</p>
                    </div>
                </div>

                <div className='mt-0 flex flex-col gap-4' >
                    <p className='font-space text-black/90 antialiased text-md '>
                        Ideal for daily use, Sauvage Shower Gel’s creamy texture procures an instant fresh sensation and cleanses the skin without drying it out. The subtly formula intensifies the fresh and woody trail of Sauvage.
                        Enriched with Cactus extract.
                    </p>

                    <p className='text-purple-600 font-sans mt-1 uppercase font-bold hover:cursor-pointer hover:text-purple-600/80 transition-all duration-300 ease-out'>View More</p>
                </div>


                <div className='grid grid-rows-2'>

                    <div className='flex gap-2 items-center justify-between'>
                        <div className='flex gap-2'>
                            <div className='border-2 border-black rounded-full h-6 w-6 flex items-center'>
                                {/** */}
                            </div>
                            <p className='text-black font-sans font-bold '>One time Purchase</p>
                        </div>

                        <div className='flex gap-2'>
                            <div className='border-2 border-black rounded-full h-6 w-6 flex items-center'>
                                <div className='bg-purple-600 h-3 w-3 rounded-full mx-auto'> </div>
                            </div>
                            <p className='text-black font-sans font-bold '>Subscribe and Save 15%</p>
                        </div>
                    </div>




                    <div className='flex flex-col gap-3'>
                        <div className='border-2 border-black p-4 rounded-xl bg-white'>
                            <p className='text-black uppercase font-bold text-md font-space '>
                                Delivered every 30 days
                            </p>

                        </div>


                        <div className='flex items-center gap-2'>
                            <div className='border-2 border-black p-4  rounded-xl w-[30%] flex items-center justify-between container bg-white'>
                                <AiOutlineMinus size={22} className='ml-4' />
                                <div className=''>
                                    <span className='text-black font-extrabold text-xl'>1</span>
                                </div>
                                <AiOutlinePlus size={20} color='black' className='mr-4' />
                            </div>

                            <div className='border-2 border-black p-4 rounded-xl flex-1 bg-[#fede65] flex justify-between items-center'>
                                <div className=''>
                                    <p className='text-black font-bold uppercase font-space '>Add to cart</p>
                                </div>
                                <div className=''>
                                    <p className='text-black font-bold uppercase font-space'>$898</p>
                                </div>

                            </div>


                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProductDisplay