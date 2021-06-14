import * as S from "./styled";

export default function Button({children,onClick,disabled}) {
  return (
    <S.Button disabled={disabled} onClick={onClick}>{children}</S.Button>
  )
}