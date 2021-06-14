import * as S from "./styled";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

export default function Container({children}) {
  return (
    <S.Container>
      <Header/>
      <S.Main>
        <Sidebar />
        {children}
      </S.Main>
    </S.Container>
  )
}