import axios from 'axios'
import React,{useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import Logo from '../img/amazon.png'

const initialState = { name:'', email:'', password:'', cPassword:''}

const Registration = () => {

  const url = 'http://localhost:5001/users'

  const [formData, setformData] = useState(initialState)
  const [isLogin, setisLogin] = useState(true)
  const history = useHistory()

  const handleSwitch = ()=>{
    setisLogin((prevIsLogin)=> !prevIsLogin )
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()

     try {

      if(isLogin){
      const {data} = await axios.post(`${url}/signUp`,formData)
      localStorage.setItem('userProfile', JSON.stringify(data))
      history.push('/')

      } else{
        const {data}= await axios.post(`${url}/signIn`,formData)
        localStorage.setItem('userProfile', JSON.stringify(data))
        history.push('/')
      }
     } catch (error) {
      alert(error?.response?.data?.message)
     }

    // localStorage.setItem('userData', JSON.stringify({...data}))

  }

  const handleChange = (e)=>{
    setformData({...formData, [e.target.name]: e.target.value})
  }
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center', margin:'40px 0' }}>
    <div style={{ padding:'20px 30px', borderRadius:'34px', boxShadow:'1px 7px 10px gray '}}>
      <form onSubmit={handleSubmit} className='form'>
        <img src={Logo} width='120px' style={{margin:'15px 0'}}/>
        <br />
        {isLogin ? (<span className='sign'>Sign Up</span>):(<span className='sign'>Sign In</span>)}
        <br />
        {isLogin && (
          <>
        <input type="text" name="name" placeholder='Name' onChange={handleChange}/>
          </>
        )}<br/>
        <input type="text" name="email" placeholder='@gmail.com' onChange={handleChange}/><br />
        <input type="password" name="password" placeholder='password*' onChange={handleChange}/><br />
        {isLogin && (
        <input type="password" name="cPassword" placeholder='Confirm Password*' onChange={handleChange}/>
        )}<br/>
        
        <button type='submit' className='submit'>{isLogin ? 'Sign Up': 'Sign In'}</button>
        <br />
      </form>
        <button className='switch' onClick={handleSwitch}>{isLogin ? 'Already have an account? Sign In': `Don't have an account? Sign Up`}</button>
    </div>
    </div>
  )
}

export default Registration