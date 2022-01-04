import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Header } from "../../components/Header";
import { ItemCar } from "../../components/ItemCar";
import { getCar } from "../../store/reducers/car";
import { AppDispatch, RootState } from "../../store/types";
import * as s from "./styles";
import { Location } from "../../components/Location";

export const Home = () => {

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const cars = useSelector((state: RootState) => state.cars.cars);

  const handleCarDetails = (id: number) => {
      dispatch(getCar({id: id}))
      navigate('/car')
  }
  
  return (
    <s.Container>
      <Header />
      <s.Content>
        {cars.map((car) => (
          <ItemCar car={car} changePageForCar={handleCarDetails} />
        ))}
      </s.Content>
    </s.Container>
  );
};
