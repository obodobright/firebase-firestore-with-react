// import Home from "./pixelsDesign/component/home";
import New from "./new/new";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./new/detail";
import Fire from "./firebase/fire";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={New}></Route>
        <Route path="/detail/:id" exact component={Detail}></Route>
        <Route path="/fire" exact component={Fire}></Route>
      </Switch>
    </Router>
  );
}

export default App;
