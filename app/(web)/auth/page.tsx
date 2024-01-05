"use client"

import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react'
import React, { ChangeEvent, FormEvent, useState } from 'react'

const initailFormData = {
    email: '',
    name: '',
    password: '',
}

function Auth() {

    const [formData, setFormData] = useState(initailFormData)

    const inputStyles = `border border-gray-300 sm:text-sm text-black rounded block w-full p-2.5 focus:outline-none`

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        const {
            name,
            value
        } = event.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        try {
            console.log(formData)
        } catch (error) {
            console.log(error)
        } finally{
            setFormData(initailFormData)
        }
        
    }

    return (
        <section className='container mx-auto'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto'>
                <div className='flex mb-8 flex-col items-center justify-center'>
                    <h1 className='text-xl leading-tight tracking-tight md:text-2xl'>
                        Create an accnout
                    </h1>
                    <p>OR</p>
                    <span className='inline-flex items-center'>
                        <IconBrandGithub className='mr-3 text-4xl cursor-pointer text-black dark:text-white'/>
                        <IconBrandGoogle className='ml-4 text-4xl cursor-pointer' />
                    </span>
                </div>

                <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        name='email' 
                        id='email' 
                        placeholder='name@campany.com' 
                        required
                        className={inputStyles}
                        value={formData?.email}
                        onChange={ handleChangeInput}
                    />
                    <input 
                        type="text" 
                        name='name' 
                        id='name'  
                        placeholder='Type your name'  
                        required
                        className={inputStyles}
                        value={formData?.name}
                        onChange={handleChangeInput}
                    />
                    <input 
                        type="password" 
                        name='password' 
                        id='password'  
                        placeholder='Enter your password' 
                        required
                        minLength={6}
                        className={inputStyles}
                        value={formData?.password}
                        onChange={handleChangeInput}
                    />
                    <button type='submit' className='w-full bg-teal-600 text-white focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center'>
                        Sign Up
                    </button>
                    <button type='submit' className='w-full bg-teal-600 text-white focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center'>
                        Sign In
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Auth