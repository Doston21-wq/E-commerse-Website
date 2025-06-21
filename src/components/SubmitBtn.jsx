import { useNavigate } from "react-router-dom"

const SubmitBtn = ({text}) => {
    const navigation=useNavigate()
    const isSubmitting=navigation.state==='isSubmitting'
  return (
    <button className='btn btn-primary btn-block uppercase'>{
        isSubmitting?<>
        <span className=" loading loading-spinner">Sending</span>
        </>:text||'submit'
    }</button>
  )
}

export default SubmitBtn