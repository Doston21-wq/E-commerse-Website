const FormSelect = ({label, name, list, defaultValue, size}) => {
  return (
    <div className="form-control">
<label htmlFor="name" className="label">
    <span className="label-text capitalize">{label}</span>
</label>
    </div>
  )
}

export default FormSelect