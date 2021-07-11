import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import "./_app.scss";
import LoginScreen from "./screens/LoginScreen";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { login } from "./redux/actions/auth.action";
const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((sidebar) => !sidebar);
  };

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </div>
  );
};
const App = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    if (!accessToken && !loading) {
      console.log("no session of user")
      history.push("/signin");
    }
  }, [accessToken, loading, history]);
  return (
    <Switch>
      <Route exact path="/">
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>
      <Route path="/signin">
        <LoginScreen />
      </Route>
      <Route path="/search">
        <Layout>
          <h1>Results</h1>
        </Layout>
      </Route>
      <Route path="/searchR">
        <h1>Searchone</h1>
      </Route>
      <Route>
        <Redirect to="/"></Redirect>
      </Route>
    </Switch>
  );
};

export default App;
