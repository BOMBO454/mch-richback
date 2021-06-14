import * as S from "./styled";

export default function InputField({title, value, onChange, disabled, ...props}) {
  return (
    <S.InputField>
      {title}
      <S.Input disabled={disabled} value={value} onChange={onChange} placeholder="Введите тип заведения" {...props}/>
    </S.InputField>
  )
}