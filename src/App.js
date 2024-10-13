import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Inicio from "./pages/inicio";
import Proyectos from "./pages/proyectos";
import ProyectoDetalles from "./pages/proyectoDetalles";
import Nosotros from "./pages/nosotros";
import Contactos from "./pages/contactos";
import NotFound from "./pages/notFound";
import Header from "./pages/header";
import Footer from "./pages/footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/proyecto/:id" element={<ProyectoDetalles />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
