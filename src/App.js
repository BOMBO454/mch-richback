import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import Container from "./components/Container/Container";
import {StoreProvider} from "./store";
import Mapbox from "./pages/Mapbox";

function App() {
  return (
    <Router>
      <StoreProvider>
        <Container>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
          </Switch>
        </Container>
      </StoreProvider>
    </Router>
  );
}

export default App;
