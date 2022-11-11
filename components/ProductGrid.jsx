import React from 'react'
import ProductItem from './ProductItem'

function ProductGrid() {
    return (
        <div className='w-full flex flex-wrap gap-2 m-2 mb-10 '>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />

        </div>
    )
}

export default ProductGrid