import React from 'react'

function ProductDisplay() {
    return (
        <div className='grid grid-cols-2 gap-4 mx-auto w-[90%] mt-6'>
            <div className='flex flex-col gap-4 items-center'>
                <div className='p-3'>
                    <img src='https://i.imgur.com/Y8ogoO2.png' className='h-[400px] w-[350px] object-contain group-hover:cursor-pointer group-hover:sepia duration-500 ease-linear 	  ' />

                </div>
            </div>

            <div className='flex flex-col gap-2 '>
                <div className=''>
                    <h1 className='text-black font-bold uppercase tracking-wider text-2xl'>Dior Sauvage</h1>
                </div>

            </div>
        </div>
    )
}

export default ProductDisplay