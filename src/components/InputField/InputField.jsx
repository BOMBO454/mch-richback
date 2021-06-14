import * as S from "./styled";

export default function InputField({value, onChange}) {
  return (
    <S.InputField>
      <input value={value} onChange={onChange} placeholder="Введите тип заведения" />
    </S.InputField>
  )
}