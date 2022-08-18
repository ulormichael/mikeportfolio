import About from "./About";
import "./App.css";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Service from "./Service";
import Project from "./Project";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Service />
      <Project />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
