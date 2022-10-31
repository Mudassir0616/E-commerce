import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { removeSelectedProduct, selectedProduct } from '../redux/actions/ProductAction'
import{Link} from 'react-router-dom'


const ProductDetails = () => {
  const product = useSelector((state)=> state)
  const {productId} = useParams()
  const dispatch = useDispatch()
  const [image, setimage] = useState(product?.allProducts?.selectedproducts?.thumbnail)
  const user = JSON.parse(localStorage.getItem('userProfile'))

 
   const fetchProductId = async()=>{
    const response = await fetch(`https://dummyjson.com/products/${productId}`)
    const data = await response.json()
    dispatch(selectedProduct(data))
   }

   
   useEffect(()=>{
     fetchProductId()
     return ()=>{
       dispatch(removeSelectedProduct()) 
      }
    },[productId]) 

    console.log(product?.allProducts?.selectedproducts)
    
    return (
      <>
    
    <div className="one-container">
      <div className='oneProduct'>
      <div style={{display:'flex', flexDirection:'column', paddingLeft:'20px'}}>
      {product?.allProducts?.selectedproducts?.images.map(image=> 
      (
        <img src={image} className='images'
          onMouseEnter = {()=> setimage(image)} 
          // onMouseOut = {()=> setimage(product?.allProducts?.selectedproducts?.thumbnail)}
          width='50px'/>
      ))}
      </div>
      <div className="one-img">
      <img src={image && image} style={{width:'350px'}} />
      </div>

      <div className="one-det">
        <p style={{fontSize:'40px', fontWeight:'600', lineHeight:'47px'}}>{product?.allProducts?.selectedproducts?.title} <br />
        <span style={{fontSize:'19px', fontWeight:'400', paddingLeft:'7px'}}>({product?.allProducts?.selectedproducts?.category})</span></p>
        <h3><span style={{color:'#cd9042'}}>&#9733; {product?.allProducts?.selectedproducts?.rating}</span></h3>
  
        <p style={{fontSize:'19px',fontWeight:'500'}}>{product?.allProducts?.selectedproducts?.description}. Only <span style={{color:'#cd9042'}}>
          {product?.allProducts?.selectedproducts?.stock}
          </span> are left, Hurry Up!!!!</p>
        
        <div style={{fontSize:'31px', fontWeight:'600',margin:'20px 0'}}>
           ${Math.round(product?.allProducts?.selectedproducts?.price - product?.allProducts?.selectedproducts?.price / product?.allProducts?.selectedproducts?.discountPercentage)}
            <span style={{color:'gray',textDecoration:'line-through', fontSize:'16px', fontWeight:'400',    opacity:'0.9', paddingLeft:'7px'}}>
              ${product?.allProducts?.selectedproducts?.price} 
            </span>&nbsp;
              
            <span style={{color:'black', fontSize:'16px', fontWeight:'400', opacity:'0.9'}}>
              (<span style={{color:'#e77600', fontSize:'17px', fontWeight:'500'}}>{product?.allProducts?.selectedproducts?.discountPercentage}</span>% off )
            </span>   
            <div style={{padding:'7px 0', fontSize:'19px', color:'black', fontWeight:'400', opacity:'0.8'}}>
              Get 10% off on Diwali Dhamaka 
            </div>

                    <div style={{color:'gray', fontSize:'15px', fontWeight:'400', paddingTop:'7px'}}>
                    <span style={{color:'#cd9042', fontWeight:'700'}}>FREE</span> Delivery by Amazon  
                    </div>
                    </div>

        
        {user ? (
        <Link to={`/myCart/${productId}`}>
      <button type='submit' className='btn'>Add to Cart</button>
        </Link>
        ):(
          <button className='btn-disabled'>Add to Cart</button>
        )}
      </div>
    </div>
    </div>

    </>
  )
}

export default ProductDetails