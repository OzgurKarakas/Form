import React from 'react';
import { MdOutlinePersonalInjury, MdBusiness } from 'react-icons/md'

const Login = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-3/4'>
            <div className='hidden sm:block bg-blue-500'>
                <h1 className='text-white text-4xl font-bold text-center py-11'>REMITGO</h1>
                <div className='text-center mb-3 text-lg text-gray-50 md:text-xl dark:text-gray-400'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tempora molestiae saepe provident velit asperiores nisi.</p>
                </div>

                <div className='flex flex-row'>
                    <img className='w-[250px] m-7' src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=600" alt='pc' />
                </div>
                <div className='flex flex-row-reverse'>
                    <img className='w-[250px] m-7' src="https://images.pexels.com/photos/7654396/pexels-photo-7654396.jpeg?auto=compress&cs=tinysrgb&w=600" alt="office" />
                </div>
            </div>

            {/* Sign Up */}
            <div className='flex flex-col justify-center'>
                <form className='ml-48 w-full mx-auto'>
                    <h2 className='text-4xl font-bold text-center py-11'>Sign Up</h2>

                    <div className='flex flex-row'>
                        <div className='flex flex-col justify-center items-center w-1/2 h-[150px] border-4 hover:border-blue-500 cursor-pointer m-1'>
                            <MdOutlinePersonalInjury />
                            <p>Personal Account</p>
                        </div>

                        <div className='flex flex-col justify-center items-center w-1/2 h-[150px] border-4 hover:border-blue-500 cursor-pointer m-1'>
                            <MdBusiness />
                            <p>Business Account</p>
                        </div>
                    </div>


                    <div className='flex flex-col py-2'>
                        <label className='py-1'>Email Address</label>
                        <input className='border p-2 w-auto' type="text" placeholder='Enter your email' />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='py-1'>Create Password</label>
                        <input className='border p-2' type="password" placeholder='More than 8 characters' />
                    </div>
                    <div className='m-2'>
                        <input type="checkbox" />
                        <span className='p-1'>Accept Terms of Service and Privacy Policy</span>
                    </div>
                    <button className='border w-full my-5 py-2 bg-blue-500 hover:bg-blue-900 text-white'>Get Started</button>
                    <div className='flex justify-center items-center'>
                        <p>Already have an account? <a href="#asd" className='text-blue-600'>Log in</a> </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login