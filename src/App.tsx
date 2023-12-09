import "./App.css";
import "./components/News";
import OffNavbar from "./components/navbar/Navbar";
import NewsComponent from "./components/News";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <OffNavbar />
      <NewsComponent />
      <Footer />
    </>
  );
}

export default App;
