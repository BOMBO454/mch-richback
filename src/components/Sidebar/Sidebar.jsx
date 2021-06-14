import * as S from "./styled";
import Button from "../Button/Button";

export default function Sidebar() {
  return (
    <S.Sidebar>
      <Button>Карта</Button>
      <Button>Анализ организации</Button>
      <Button>Отчёт</Button>
    </S.Sidebar>
  )
}