import React from 'react'

function NavBar() {
    return (
        <div className='flex gap-0  items-center m-2 mb-0 space-between  justify-between'>

            <ul className='list-none flex gap-6 items-center'>
                <li className='text-black font-semibold text-md'>Home</li>
                <li className='text-black font-semibold text-md'>Family</li>
                <li className='text-black font-semibold text-md'>Shop</li>
            </ul>


            <div className=''>
                <li className='text-black font-semibold text-md list-none '>
                    09/11/2022 9:44 AM NYC
                </li>
            </div>

            <div className='mr-3'>
                <li className='text-black font-semibold text-md list-none '>
                    Cart 00
                </li>
            </div>


        </div>
    )
}

export default NavBar