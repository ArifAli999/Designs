import React from 'react'
import { BiChevronRight } from 'react-icons/bi'

function BreadCrumb() {
    return (
        <div className='font-light text-black/90 flex gap-2 mx-auto  w-[90%] items-center mb-4'>
            <div className='flex items-center '>Products</div>
            <BiChevronRight size={20} />
            <div className='flex items-center '>Clothing</div>
            <BiChevronRight size={20} />
            <div className='flex items-center text-purple-600 '>Purple Faded Hoodie </div>
        </div>
    )
}

export default BreadCrumb