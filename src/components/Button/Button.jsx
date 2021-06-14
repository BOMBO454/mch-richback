import * as S from "./styled";

export default function Button({children,onClick}) {
  return (
    <S.Button onClick={onClick}>{children}</S.Button>
  )
}