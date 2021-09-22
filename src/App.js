import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Form from "./Container/Form";
import List from "./Container/List";
import "antd/dist/antd.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" name="Login Page" component={List} />
          <Route exact path="/form" name="Login Page" component={Form} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
