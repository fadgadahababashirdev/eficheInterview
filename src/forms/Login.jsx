import React from 'react'

const Login = () => {
  return (
    <div className="w-full">
      {/* div containing image and the form */}
      <div className='flex min-w-full justify-center bg-red-500'>
        {/* form div  */}
        <div>
          {/* icon down */}
          <div></div>
          {/* file and heading div */}
          <div className='flex '>
            {/* file */}
            <div></div>
            {/* heading */}
            <div>eFiche</div>
          </div>
          {/* login into your account  */}
          <div>
            <h1>Log into your account</h1>
          </div> 
          {/* input username  */}
          <div>
            <h1>Username*</h1> 
            <input type="text" placeholder='username'/>
          </div> 
          {/* password */}
          <div>
            <h1>Password*</h1> 
            <div>
              {/* input */}
              <input type="text" placeholder='username'/> 
              {/*eye*/}
              <span></span>
            </div>
          </div> 
          {/* remember me and forgor password container */} 
          <div className='flex justify-between'>
            <div className='flex gap-2'>
              {/* checkbox */}
              <input type="checkbox"/> 
              {/* remember me  */}
              <span>Remember Me</span>
            </div> 
            {/* forgot password */}
            <span>Forgot Password</span>
          </div> 
          {/* Login */}
          <div>
            <button className='w-full text-center text-white p-4 '>Login</button>
          </div> 
          {/* copy rights */}
          &copy;2024 eFiche.Arlights reserved. <span>Teems& conditions Privacy Policy</span>
        </div> 
        {/* image with texts dev */}
        <div></div>
        {/*image div*/}
      </div>
    </div>
  )
}

export default Login