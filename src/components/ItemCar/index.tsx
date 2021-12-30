import * as s from "./styles";
import { Car } from "../../shared/types";
import { FiMoreHorizontal } from "../../shared/Icons/";
import { useNavigate } from "react-router";
import { useCallback } from "react";

interface CarItem {
  car: Car;
  changePageForCar(id: number) : void;
}

export const ItemCar = ({ car, changePageForCar }: CarItem) => {
  const navigate = useNavigate();

  const handleCarDetails = useCallback(() => {
    navigate("/car");
  }, []);


  return (
    <s.Container onClick={changePageForCar.bind(this, car.id)}>
      <s.Content>
        <s.Container_Details>
          <s.Texts>
            {" "}
            <s.Text_Brand>{car.brand}</s.Text_Brand>
            <s.Text_Model>{car.model}</s.Text_Model>
          </s.Texts>
          <s.Icon>
            <FiMoreHorizontal color="#C4C4C4" size={30} />
          </s.Icon>
        </s.Container_Details>
        <s.Container_Image>
          <s.Image src={car.cover_photo} />
        </s.Container_Image>
        <s.Container_Price>
          <s.Text_Price>
            <s.Simbol>$</s.Simbol>
            {car.price}
            <s.Text_Period>/day</s.Text_Period>
          </s.Text_Price>
        </s.Container_Price>
      </s.Content>
    </s.Container>
  );
};
