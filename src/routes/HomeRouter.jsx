import { Navigate, Route, Routes } from 'react-router-dom';
import { Prescripciones } from '../app/Prescripciones';
import { Estadistica } from '../app/Estadistica';
import { Descargar } from '../app/Descargar';
import { Resumen } from '../app/Resumen';
import { Cargar } from '../app/Cargar';


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


