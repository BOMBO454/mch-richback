import {observer} from "mobx-react";
import NewMap from "../components/Map/NewMap";

function Home() {
  return <NewMap/>
}

export default observer(Home)