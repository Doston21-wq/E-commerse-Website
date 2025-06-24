import {Form, Link, useLoaderData} from 'react-router-dom'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
const Filter = () => {
  const {meta} = useLoaderData()
  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 items-center'>
{/* Search */}
<FormInput type={'search'} label={'Search Product'} name={'search'} size={'input-sm'}/>
{/* CATEGORY */}
<FormSelect label={'Select Category'} name={'category'} list={meta.categories} size={'select-sm'}/>
{/* COMPANIES */}
<FormSelect name={'company'} label={'Select Company'} list={meta.companies} size={'select-sm'} />
{/* SORT */}
<FormSelect name={'sort'} label={'Sort By'} list={['a-z', 'z-a', 'high', 'low']} size={'select-sm'} />
{/* Buttons */}
<button type='submit' className='btn btn-primary btn-sm'>SEARCH</button>
<Link to={'/products'} className='btn btn-accent btn-sm text-white'>Reset</Link>

    </Form>
  )
}

export default Filter