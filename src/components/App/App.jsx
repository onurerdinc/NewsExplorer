import "./App.css";
import About from "../About/About";

import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Header from "../Header/Header";

function App() {
  return (
    <div className="page">
      <div className="main-container">
        <Header />
        <Main />
      </div>
      <div className="page__content">
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
