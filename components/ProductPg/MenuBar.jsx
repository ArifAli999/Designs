import React from 'react'

function MenuBar() {
    return (

        <div className=' p-3 border-2 border-black w-[90%]  mt-4 mb-6 mx-auto rounded-xl flex  items-center'>


            <div className='flex gap-3 items-center p-2 flex-1'>

                <div className='text-slate-400 font-semibold tracking-wider font-mono'>HOME</div>
                <div className='text-purple-700 font-semibold tracking-wider font-mono'>PRODUCTS</div>
                <div className='text-slate-400 font-semibold tracking-wider font-mono'>SUBSCRIBE</div>
            </div>


            <div className='flex gap-3 mr-4'>

                <div className='text-black font-semibold tracking-wide font-mono'>LOG IN</div>
                <div className='text-black font-semibold tracking-wide font-mono'>|</div>
                <div className='text-black font-semibold tracking-wide font-mono'>CART</div>

            </div>


        </div>



    )
}

export default MenuBar