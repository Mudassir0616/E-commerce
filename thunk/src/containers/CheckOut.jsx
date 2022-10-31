import axios from 'axios'
import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import Logo from '../img/amazon.png'
import { Grid } from '@mui/material'

const state = { firstName:'', lastName:'', number:'', address:'', pincode:''}

const CheckOut = () => {
    const cart = useSelector(state=> state?.allProducts?.basket)
    
    const url = `http://localhost:5001/delivery`

    const [deliverData, setdeliverData] = useState(state)

    const handleChange = (e)=>{
        setdeliverData({...deliverData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()

        const deliver = await axios.post(url, deliverData)

        if(deliver){
            alert('Order placed Successfully')
        }
        
    }

    const total = cart?.map(product=> (Math.round(product?.price - product?.price / product?.discountPercentage)))
    const sum = total.reduce((allProducts, price)=> allProducts + price, 0)

  return (
    <div className='delivery'>

        <img src={Logo} width='110px'/>

    <Grid>        
      <form onSubmit={handleSubmit} className='delivery-form'>

        <input type="text" name="firstName" placeholder='FirstName' onChange={handleChange} required
         style={{padding:'10px 10px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;

        <input type="text" name="lastName" placeholder='LastName' onChange={handleChange} 
         style={{padding:'10px 10px'}}/><br />

        <input type="number" name="number" placeholder='Tel' onChange={handleChange} required
         style={{padding:'10px 10px'}}/><br />

        <input type="text" name="address" placeholder='Address' onChange={handleChange} required 
         style={{padding:'40px 10px', width:'100%'}}/><br />

        <input type="number" name="pincode" placeholder='Pincode' onChange={handleChange}
         style={{padding:'10px 10px'}}/><br />

         <h3>Total - {sum} $</h3>

        <button type='submit'>Order</button>

      </form>
    </Grid>
    </div>
  )
}

export default CheckOut

