const FormSelect = ({label, name, list, defaultValue, size}) => {
  return (
<fieldset className="fieldset">
  <legend className="fieldset-legend">{label}</legend>
  <select defaultValue={defaultValue} className="select ${size}">
 {
    list.map((item) =>{
        return(
            <option value={item} key={item}>{item}</option>
        )
    }
)
 }
  </select>
  <span className="label">Optional</span>
</fieldset>
  )
}

export default FormSelect