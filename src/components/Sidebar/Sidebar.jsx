import * as S from "./styled";
import Button from "../Button/Button";
import Select from "react-select";
import { useState } from "react";
import { useStore } from "../../store";

export default function Sidebar() {
  const {mapStore} = useStore()
  const [type, setType] = useState("type");
  const handleTypeChange = (newValue, actionMeta) => {
    mapStore.setType(newValue.value);
  }
  return (
    <S.Sidebar>
      <div className="side__half top">
        <div>
          <Button>Карта</Button>
          <Button>Анализ организации</Button>
          <Button>Отчёт</Button>
        </div>
        <div>
          <Select
            onChange={handleTypeChange}
            defaultValue={{value: 'cafe', label: 'Кафе'}}
            options={[
              {value: 'cafe', label: 'Кафе'},
              {value: 'beauty', label: 'парикмахерская'},
              {value: 'medicine', label: 'клиника'},
              {value: 'retail', label: 'торговля'},
              {value: 'services', label: 'услуги'}
            ]}/>
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
      <div className="side__half bottom">
        <div>
        <h4>Информация</h4>
        <div>Адрес: {mapStore.currentPlace.address}</div>
        <div>Площадь: </div>
        <div>Тип помещения: </div>
        <div>Стоимость аренды: </div>
        <p className="description">

        </p>
        </div>
        <div>
          <img src="https://img3.goodfon.com/wallpaper/nbig/b/bd/koshka-leto-fon-4893.jpg" alt="Cat"/>
          <Button>Индивидуальный план открытия</Button>
        </div>
      </div>
    </S.Sidebar>
  )
}