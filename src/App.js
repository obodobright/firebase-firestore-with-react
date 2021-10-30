// import Home from "./pixelsDesign/component/home";
import New from "./new/new";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./new/detail";
import Fire from "./firebase/fire";
import PushData from "./firebase/pushData";
import SuccessPage from "./firebase/success";
import Homescreen from "./firebase/home";
import Upload from "./firebase/upload";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={New}></Route>
        <Route path="/detail/:id" exact component={Detail}></Route>
        <Route path="/fire" exact component={Fire}></Route>
        <Route path="/pushdata" exact component={PushData}></Route>
        <Route path="/successpage" exact component={SuccessPage}></Route>
        <Route path="/homescreen" exact component={Homescreen}></Route>
        <Route path="/upload" exact component={Upload}></Route>
      </Switch>
    </Router>
  );
}

export default App;
