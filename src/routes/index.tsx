import { Route, BrowserRouter, Routes } from "react-router-dom";
import {DetailsCars, Home} from '@screen/'

export const RouterApp : React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/car"  element={<DetailsCars />} />
      </Routes>
    </BrowserRouter>
  );
};
