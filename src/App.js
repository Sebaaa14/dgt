import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Inicio from "./pages/inicio";
import Proyectos from "./pages/proyectos";
import Acerca from "./pages/acerca";
import Contactos from "./pages/contactos";
import NotFound from "./pages/notFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
