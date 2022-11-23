import logo from "../assets/statics/logo.svg"
import '../assets/css/App.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
      />
      <Header></Header>
      <header className="App-header AppBg">
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
