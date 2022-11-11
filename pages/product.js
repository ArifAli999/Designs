import React from 'React'
import MenuBar from '../components/ProductPg/MenuBar'
import BreadCrumb from '../components/ProductPg/BreadCrumb'
import { BiChevronRight } from 'react-icons/bi'
import ProductDisplay from '../components/ProductPg/ProductDisplay'
function ProductPage() {
    return (
        <div className='min-h-screen bg-violet-300 w-full flex flex-col   '>
            <div className='bg-[#fffaf5]  mx-auto  mt-10 border-2 border-black rounded-xl flex flex-col   w-[90%]'>
                <MenuBar />
                <BreadCrumb />
                <ProductDisplay />
            </div>
        </div>
    )
}

export default ProductPage
