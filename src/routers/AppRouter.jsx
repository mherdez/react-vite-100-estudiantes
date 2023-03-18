import { BrowserRouter, Route, Routes } from "react-router-dom";
import Control from "../screens/Control";
import MarcadorEquipo1 from "../screens/MarcadorEquipo1";
import MarcadorEquipo2 from "../screens/MarcadorEquipo2";
import Preguntas from "../screens/Preguntas";

const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Preguntas />}  />
        <Route path="/control" element={<Control />}  />
        <Route path="/equipo1" element={<MarcadorEquipo1 />}  />
        <Route path="/equipo2" element={<MarcadorEquipo2/>}  />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;