import { Navigate, Route, Routes } from 'react-router-dom';
import { Cargar, Descargar, Estadistica, Prescripciones, Resumen } from '../app/vistas';


export const HomeRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/descargar" element={<Descargar />} />
        <Route path="/cargar" element={<Cargar />} />
        <Route path="/resumen" element={<Resumen />} />
        <Route path="/table" element={<Prescripciones />} />
        <Route path="/estadisticas" element={<Estadistica />} />
        <Route path="/*" element={<Navigate to={'/home/descargar'} />} />
    </Routes> 
    </>
  )
}


