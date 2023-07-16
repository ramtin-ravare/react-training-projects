import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import "./index.css";

export default function App() {
  return <div className="container">
    <Header />
    <Menu />
    <Footer />
  </div>
}