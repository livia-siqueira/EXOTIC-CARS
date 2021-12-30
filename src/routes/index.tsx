import { Route, BrowserRouter, Routes } from "react-router-dom";
import { DetailsCars } from "../screens/DetailsCars";
import { Home } from "../screens/Cars/index";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/car"  element={<DetailsCars />} />
      </Routes>
    </BrowserRouter>
  );
};
