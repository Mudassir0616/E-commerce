import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import { setProducts } from '../redux/actions/ProductAction'

const ProductListing = () => {
    const products = useSelector((state)=> state)
    const dispatch = useDispatch()
    
    const fetchProducts = async()=>{
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json()
        dispatch(setProducts(data?.products))
        
    }

    useEffect(()=>{
        fetchProducts()
    },[])

    
  return (
    <div className='container'>
        <ProductComponent rating={5}/>
    </div>
  )
}

export default ProductListing