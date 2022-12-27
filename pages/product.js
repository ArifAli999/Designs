import React, { useEffect } from 'react'
import MenuBar from '../components/ProductPg/MenuBar'
import BreadCrumb from '../components/ProductPg/BreadCrumb'
import { BiChevronRight } from 'react-icons/bi'
import ProductDisplay from '../components/ProductPg/ProductDisplay'
import { useQuery, useQueryClient } from 'react-query'
import { useGetFetchQuery } from '../utils/useGetFetchQuery'


function ProductPage() {

    const { data } = useGetFetchQuery();
    console.log(data)


    return (
        <div className='min-h-screen bg-violet-300 w-full flex flex-col   '>
            <div className='bg-[#fffaf5]  mx-auto  mt-10 mb-10 border-2 border-black rounded-xl flex flex-col   w-[90%]'>
                <MenuBar />
                <BreadCrumb />
                <ProductDisplay />
            </div>
        </div>
    )
}

export default ProductPage
