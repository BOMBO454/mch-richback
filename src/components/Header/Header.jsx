import * as S from "./styled"
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import {useState} from "react";
import {useStore} from "../../store";

function Header() {
  const {mapStore} = useStore()
  const [place,setPlace] = useState(mapStore.address)
  const handleApply = ()=>{
    mapStore.setAddress(place)
  }
  return (
    <S.Header>
      <Button disabled>Фильтр</Button>
      <InputField value={place} onChange={e=>{setPlace(e.target.value)}}/>
      <Button onClick={handleApply}>Применить</Button>
    </S.Header>
  )
}

export default Header