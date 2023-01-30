import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Barra from "./Componentes/Barra.jsx";
import Home from "./views/Home.jsx";
import Contacto from "./views/Contacto.jsx";
import NotFound from "./views/NotFound.jsx";

function App() {
  return (
    <div>

      <BrowserRouter>
        <Barra />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
