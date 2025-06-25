import {useState} from 'react'
import { formatPrice} from '../utils'
const FormRange = ({label, name, size}) => {
    const step = 1000
    const maxPrice = 100000
    const [selectedPrice, setSelectedPrice] = useState(maxPrice)
  return (
    <div className='form-control'>
<label htmlFor={name} className='label cursor-pointer'>
   
    <span className='capitalize label-text'>{label}</span>
<span>{formatPrice(selectedPrice)}</span>
</label>
<input
min={0}
max={maxPrice}
value={selectedPrice}
step={step}
onChange={(e)=>setSelectedPrice(e.target.value)}
type="range"
className='range range-primary ${size}'
 />
 <div className='w-full flex justify-betwenn text-xs px-2 mt-2'>
<span className='font-bold text-md'>0</span>

<span className='font-bold text-md ml-35'>Max:{formatPrice(maxPrice)}</span>
 </div>
    </div>
  )
}

export default FormRange