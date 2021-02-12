import Carousel from "./components/Carousel";
import DigitalSolution from "./components/DigitalSolution";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Info from "./components/Info";
import Servico from "./components/Servico";
import Time from "./components/Time";



function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Form />
      <Info />
      <Servico />
      <Time />
      <DigitalSolution />
      <Footer />

    </div>
  );
}

export default App;
