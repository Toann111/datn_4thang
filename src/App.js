import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/footer/Footer";
import Home from "./Page/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
