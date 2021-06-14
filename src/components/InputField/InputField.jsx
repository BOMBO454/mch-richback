// import {} from "./styled";

export default function InputField({value, onChange}) {
  return (
    <label>
      <input value={value} onChange={onChange}/>
    </label>
  )
}