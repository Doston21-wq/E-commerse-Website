import React from 'react'
import { Form, Link } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../components'

const Login = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-6' method='post'>
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput type={'email'} label={'email'} name={'indentifeir'} defaultValue={'test@gmail.com'} />
        <FormInput type={'password'} label={'password'} name={'password'} defaultValue={'secret'} />
        <div className="mt-4">
          <SubmitBtn text={'login'} />
        </div>
        <button type='button' className='btn btn-secondary btn-block uppercase'>Guest user</button>
        <p className='text-center'>Not a member yet? <Link to={'/register'} className='ml-2 link link-hover link-primary capitalize'>register</Link></p>
      </Form>
    </section>
  )
}

export default Login