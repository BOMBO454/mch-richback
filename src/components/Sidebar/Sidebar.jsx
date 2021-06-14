import * as S from "./styled";
import Button from "../Button/Button";
import Select from "react-select";
import { useState } from "react";
import { useStore } from "../../store";
import { formattedMoney } from "../../helpers/money";
import { observer } from "mobx-react";

function Sidebar() {
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
        {mapStore.currentPlace.area && <div>
          <h4>Информация</h4>
          <pan>Сдача {mapStore.currentPlace.area}м^2 за {formattedMoney(mapStore.currentPlace.cost)}р</pan>
          <li>Хороших компаний рядом {mapStore.currentPlace.biz_count}</li>
          <li>До метро {mapStore.currentPlace.metro_station} {formattedMoney(mapStore.currentPlace.metro_dist)}км</li>
          <li>поток {mapStore.currentPlace.usertime}/м длительность</li>
          <li>поток {mapStore.currentPlace.counts}/ч человек</li>
          <li>этаж {mapStore.currentPlace.floor}</li>
          <li>конкурентов рядом {mapStore.currentPlace.comp_count}</li>
          <ul>
            <h4>Рядом есть интересные места:</h4>
            {mapStore.currentPlace.land_arround && mapStore.currentPlace.land_arround.slice(0, 5).map(land => (
              <li>{land.name} {formattedMoney(land.place_dist)}м</li>
            ))}
          </ul>
        </div>}
        <div>
          <img src="https://img3.goodfon.com/wallpaper/nbig/b/bd/koshka-leto-fon-4893.jpg" alt="Cat"/>
          <Button>Индивидуальный план открытия</Button>
        </div>
      </div>
    </S.Sidebar>
  )
}

export default observer(Sidebar)