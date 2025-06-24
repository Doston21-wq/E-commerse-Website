const FormSelect = ({label, name, list, defaultValue, size}) => {
  return (
<fieldset className="fieldset">
  <legend className="fieldset-legend">{label}</legend>
  <select defaultValue={defaultValue} className="select ${size} cursor-pointer">
 {
    list.map((item) =>{
        return(
            <option value={item} key={item}>{item}</option>
        )
    }
)
 }
  </select>
</fieldset>
  )
}

export default FormSelect