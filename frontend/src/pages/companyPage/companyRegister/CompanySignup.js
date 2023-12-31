import React,{ useState } from 'react'
import './CompanySignup.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const CompanySignup = () => {

  let navigate = useNavigate();
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "",mobile:"",address:"" });

  const handleSubmit=async(e)=>{
    e.preventDefault();
   
    const response = await fetch('https://restaurant-website-backend.vercel.app/api/company', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password,mobile:credentials.mobile,address:credentials.address })
    });
    const json = await response.json();
    console.log(json);
  
    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem('token', json.authtoken)
      navigate("/companyLogin");
      
    } else {

     console.log("success false");
    }
  }
  
  const onChange=async(e)=>{
    console.log(e.target.name)
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="companySignupcontainer">
        <img className='companySignupMainImg' src="https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/f55c87d06a345e9c94021f3e/3007283.jpg" alt="" />
        <div className='companySignupAbsolute'>
          <form action="" className='companySinupForm' onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" placeholder='enter your company name'name='name' onChange={onChange}  />
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder='enter your email' name='email' onChange={onChange} />
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder='enter your password' name='password' onChange={onChange} minLength={5} required/>
            <label htmlFor="mobile">Mobile:</label>
            <input type="text" placeholder='enter your mobile number' name='mobile' onChange={onChange} />
            <label htmlFor="address">Address:</label>
            <input type="text" placeholder='enter your address' name='address' onChange={onChange} />
            <button type='submit'>Submit</button>
            <p style={{color:"black",fontWeight:500}}>Already have account? <Link to="/companyLogin"><span>Login</span></Link></p>
          </form>
        </div>
      </div>

    </>
  )
}

export default CompanySignup
