import TopBar from "./components/TopBar/TopBar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Settings from "./Pages/Settings/Settings";
import Single from "./Pages/single/Single";
import Write from "./Pages/Write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/Register">
          {user?<Home />:<Register />}
        </Route>
        <Route  path="/Login">
          {user?<Home />:<Login />}
        </Route>
        <Route  path="/Write">
          {user?<Write />:<Login />}
        </Route>
        <Route  path="/Settings">
          {user ? <Settings /> : <Login />}
        </Route>
        <Route  path="/post:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
