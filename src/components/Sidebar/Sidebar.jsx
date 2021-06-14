import * as S from "./styled";
import Button from "../Button/Button";

export default function Sidebar() {
  return (
    <S.Sidebar>
      <div className="side__half grid">
        <div>
          <Button>Карта</Button>
          <Button>Анализ организации</Button>
          <Button>Отчёт</Button>
        </div>
        <div>
          <Button>Категории</Button>
          <Button>Анализ района</Button>
          <Button>Тепловая карта</Button>
          <Button>Цены</Button>
          <Button>Число людей</Button>
        </div>
        <div>
          <h5>Место</h5>
          <ul>
            <li>Тип недвижимости</li>
            <li>Собственник</li>
            <li>Количество клиентов</li>
            <li>Время нахождения</li>
            <li>Группы людей</li>
          </ul>
          <h5>Пользователи</h5>
          <ul>
            <li>Средний чек</li>
            <li>Время визита</li>
            <li>Возвращение</li>
          </ul>
        </div>
      </div>
      <div className="side__half">

      </div>
    </S.Sidebar>
  )
}