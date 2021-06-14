import * as S from "./styled";
import Button from "../Button/Button";
import Select from "react-select";
import { useEffect, useState } from "react";
import { useStore } from "../../store";
import { formattedMoney } from "../../helpers/money";
import { observer } from "mobx-react";
import { AnimatePresence } from "framer-motion";
import InputField from "../InputField/InputField";
import { B } from "react-select/dist/index-4bd03571.esm";

function Sidebar() {
  const {mapStore} = useStore()
  const [type, setType] = useState("type");
  const [from_price, setFrom_price] = useState(undefined);
  const [to_price, setTo_price] = useState(undefined);
  const [from_area, setFrom_area] = useState(undefined);
  const [to_area, setTo_area] = useState(undefined);

  useEffect(() => {
    setFrom_price(mapStore.filter.from_price)
    setTo_price(mapStore.filter.to_price)
    setFrom_area(mapStore.filter.from_area)
    setTo_area(mapStore.filter.to_area)
  }, [mapStore]);


  const [planVisibility, setPlanVisibility] = useState(false);
  const handleTypeChange = (newValue, actionMeta) => {
    mapStore.setType(newValue.value);
  }
  const handleApply=()=>{
    mapStore.setFilter({from_price,to_price,from_area,to_area});
  }
  return (
    <S.Sidebar>
      <div className="side__half top">
        <S.List>
          <Button disabled>Карта</Button>
          <Button disabled>Анализ организации</Button>
          <Button disabled>Отчёт</Button>
        </S.List>
        <S.List>
          <Select
            style={{marginBottom: "20px"}}
            onChange={handleTypeChange}
            defaultValue={{value: 'cafe', label: 'Кафе'}}
            options={[
              {value: 'cafe', label: 'Кафе'},
              {value: 'beauty', label: 'парикмахерская'},
              {value: 'medicine', label: 'клиника'},
              {value: 'retail', label: 'торговля'},
              {value: 'services', label: 'услуги'}
            ]}/>
          <InputField value={from_price} title={"Цена от"} onChange={e => setFrom_price(e.target.value)}/>
          <InputField value={to_price} title={"Цена до"} onChange={e => setTo_price(e.target.value)}/>
          <InputField value={from_area} title={"Площадь от"} onChange={e => setFrom_area(e.target.value)}/>
          <InputField value={to_area} title={"Площадь до"} onChange={e => setTo_area(e.target.value)}/>
          <InputField disabled title={"Коэфициент конкуренции"} />
          <InputField disabled title={"Человеко-поток"} />
          <Button onClick={handleApply}>Применить</Button>
        </S.List>
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
          <ul>
            <li>Хороших компаний рядом {mapStore.currentPlace.biz_count}</li>
            <li>До метро {mapStore.currentPlace.metro_station} {formattedMoney(mapStore.currentPlace.metro_dist)}км</li>
            <li>поток {mapStore.currentPlace.usertime}/м длительность</li>
            <li>поток {mapStore.currentPlace.counts}/ч человек</li>
            <li>этаж {mapStore.currentPlace.floor}</li>
            <li>конкурентов рядом {mapStore.currentPlace.comp_count}</li>
          </ul>
          <h4>Рядом есть интересные места:</h4>
          <ul>
            {mapStore.currentPlace.land_arround && mapStore.currentPlace.land_arround.slice(0, 5).map(land => (
              <li>{land.name} {formattedMoney(land.place_dist)}м</li>
            ))}
          </ul>
        </div>}
        <div>
          <img src="https://img3.goodfon.com/wallpaper/nbig/b/bd/koshka-leto-fon-4893.jpg" alt="Cat"/>
          {mapStore.currentPlace.area &&
          <Button onClick={() => {setPlanVisibility(true)}}>Индивидуальный план открытия</Button>}
        </div>
      </div>
      <AnimatePresence>
        {planVisibility &&
        <S.Plan initial={{opacity: 0, x: "-100%"}}
                animate={{opacity: 1, x: "0"}}
                exit={{opacity: 0, x: "-100%"}}>
          <h1>ИОП</h1>
          <title>открыть ресторан грузинской кухни</title>

          <p>Показываем помещения свободного назначения и торговли, соответствующей площадью +/- 20 м2, в верху самые
            лучшие варианты с описанием</p>

          <p>В описании (данные взяты с https://irr.ru/):
            <ul>
              <li>- Адрес: Арбат, 44 ст1</li>
              <li>- Общая площадь 160 м2 в двух уровнях (1 этаж - 121,1 м2.; Подвал - 38,9 м2 )</li>
              <li>- Помещение стрит ритейл</li>
              <li>- 5 минут от м. Смоленская</li>
              <li>- Отдельный вход с ул. Арбат, запасной (зона разгрузки товара)</li>
              <li>- Потолки 3 метра</li>
              <li>- Приточно вытяжная вентиляция</li>
              <li>- Электричество 70 квт</li>
              <li>- Реклама на фасаде</li>
              <li>- Согласованное место для летней веранды со стороны фасада</li>
              <li>- Прямая аренда 150.000 рублей в месяц</li>
              <li>- Депозит, каникулы по условиям договора</li>
              <li>- клиентский поток 25000 в сутки
              </li>
            </ul>
          </p>
          <p>Конкуренты (данные взяты с https://2gis.ru/):
            В радиусе 1 километра есть только одна хинкальная:
            - время работы: ежедневно с 11:00 до 23:00
            - средний чек: 500 рублей
            - до 35 мест
            - рейтинг 3,6/5
          </p>
          <p>
            Рекомендуем из-за большого клиентского потока, отсутствия сильного конкурента в радиусе 1 км, подходящее
            помещение именно под ресторан (экономия на ремонте)
          </p>
          <Button onClick={()=>{setPlanVisibility(false)}}>Закрыть</Button>
        </S.Plan>
        }
      </AnimatePresence>
    </S.Sidebar>
  )
};

export default observer(Sidebar)