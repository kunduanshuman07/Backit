const AuthRegister = () => {
    return (
      <div className='grid grid-cols-1 p-2'>
          <div className='mx-auto p-10 shadow-md flex flex-col my-20'>
              <h1 className='text-center font-bold bg-neutral text-white rounded-lg'>....... BackIt .......</h1>
                <input type="text" placeholder="Email your Name" id='name' name='name' className="input input-sm input-bordered input-accent w-full mt-10" />
              <input type="text" placeholder="Email address" id='email' name='email' className="input input-sm input-bordered input-accent w-full mt-2" />
              <input type="text" placeholder="Password" id='password' name='password' className="input input-bordered input-accent w-full input-sm mt-2" />
              <input type="text" placeholder="Confirm Password" id='cpassword' name='cpassword' className="input input-bordered input-accent w-full input-sm mt-2" />
              <button className='btn btn-accent text-white font-bold mt-5 mx-auto pl-10 pr-10'>Register</button>
              <a className='text-xs mt-3 font-bold text-center' href="/login">Existing User? <span className='font-bold text-accent underline cursor-pointer'>Login</span></a>
          </div>
      </div>
    )
  }
  
  export default AuthRegister