import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Header, ItemCar } from "@components/";
import { getCar } from "../../store/reducers/car";
import { AppDispatch, RootState } from "../../store/types";
import * as s from "./styles";

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
