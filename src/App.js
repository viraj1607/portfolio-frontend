import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import { Switch, Route } from "react-router-dom";
import Loader from "./components/loader/Loader";

function App() {
  return (
    <div className="App">
      <Loader />
      <Sidebar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
