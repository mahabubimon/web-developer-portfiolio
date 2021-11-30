import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/home/about/About";
import Contact from "./pages/home/contact/Contact";
import Home from "./pages/home/home/Home";
import Projects from "./pages/home/projects/Projects";
import Footer from "./pages/shared/footer/Footer";
import Header from "./pages/shared/header/Header";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
