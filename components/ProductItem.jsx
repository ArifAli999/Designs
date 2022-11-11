import React from 'react'

function ProductItem() {
    return (
        <div className='flex flex-col  group'>

            <img src='https://i.imgur.com/iMFr1LH.png' className='h-[500px] w-[350px] object-cover group-hover:cursor-pointer group-hover:sepia duration-500 ease-linear	  ' />


            <div className='mt-2 mb-2'>
                <h2 className='text-black font-light text-sm text-uppercase font-serif uppercase'>
                    Purple Faded Hoodie
                </h2>
                <h4 className='text-black font-light text-base font-serif'>
                    $60.66
                </h4>
            </div>

        </div>
    )
}

export default ProductItem