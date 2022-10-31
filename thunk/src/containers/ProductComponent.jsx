import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Pagination } from '@mui/material'


const ProductComponent = ({rating}) => {
    const products = useSelector((state)=> state.allProducts.products)
    
    // const [productSearched, setProductSearched] = useState(products)
    // const [searchProducts, setSearchProducts] = useState('')
    const [currentPage, setCurrentPage] = useState(1);

    const productsPerpage = 8;

    const indexOflastProduct = currentPage * productsPerpage;
    const indexOfFirstProduct = indexOflastProduct - productsPerpage;
    const currentProducts = products?.slice(indexOfFirstProduct, indexOflastProduct)

    const paginate =(e, value)=>{
        setCurrentPage(value)
    }
    
    // useEffect(()=>{
    //     const filteredProducts = products?.filter((product)=> product.title.toLowerCase().includes(searchProducts.toLowerCase()))
        
    //     setProductSearched(filteredProducts);
        
    // },[searchProducts])
    
    
    const renderItems = currentProducts?.map(product =>(

        <div >
        <Link to={`product/${product.id}`}>
            <div className="card" key={product?.id}>
      
                <div className="image">
                <h2>{product?.brand}</h2>
                    <img src={product?.thumbnail} style={{width:'auto',paddingTop:'40px'}}/>
                </div>

                <div className="content">
                    <div style={{color:'gray', fontWeight:'600',fontSize:'20px'}}>
                      {product?.title} 
                      <span style={{fontSize:'16px', paddingLeft:'7px', fontWeight:'400'}}>
                      ({product?.category})
                      </span>
                    </div>
                
                    <div style={{fontSize:'31px', fontWeight:'600',margin:'20px 0'}}>
                    ${Math.round(product?.price - product?.price / product?.discountPercentage)}
                    <span style={{color:'gray',textDecoration:'line-through', fontSize:'16px', fontWeight:'400', opacity:'0.9', paddingLeft:'7px'}}>
                        ${product?.price} 
                    </span>&nbsp;
                    <span style={{color:'black', fontSize:'16px', fontWeight:'400', opacity:'0.9'}}>
                    ({product?.discountPercentage}% off )
                    </span>   
                    <div style={{padding:'7px 0', fontSize:'19px', color:'black', fontWeight:'400', opacity:'0.8'}}>
                        Get 10% off on Diwali Dhamaka 
                    </div>

                    <div style={{color:'gray', fontSize:'15px', fontWeight:'400', paddingTop:'7px'}}>
                    <span style={{color:'#cd9042', fontWeight:'700'}}>FREE</span> Delivery by Amazon  
                    </div>
                    </div>
                </div>
            </div>
        </Link>
        </div> 
        
    ))
       
    return (
        <div>

            <div className="amazon-logo">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" className='home-img'/>
            </div>

           {/* <div className='srch-products'>
            <input type='text' className='srch-product-details' placeholder='Search...' onChange={(e)=> setSearchProducts(e.target.value)}/>
            </div> */}
            <div style={{margin:'30px 0', display:'flex', justifyContent:'center'}}>
              <Pagination
                count={Math.ceil(products?.length / productsPerpage)} 
                size='large'
                page={currentPage}
                onChange={paginate}
              />
            </div>

           <div className='render-products'>
             {renderItems && renderItems}
           </div>

           <div style={{margin:'30px 0', display:'flex', justifyContent:'center'}}>
              <Pagination
                count={Math.ceil(products?.length / productsPerpage)} 
                size='large'
                page={currentPage}
                onChange={paginate}
              />
            </div>
           
        </div>
  )
}

export default ProductComponent