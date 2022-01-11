import { useSelector } from "react-redux";
import { RootState } from "../../store/types";
import * as s from "./styles";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "@shared/";
import { useCallback, useState } from "react";
import { SliderCars, Header } from "@components/";
import { useNavigate } from "react-router";

export const DetailsCars: React.FC = () => {
  const carSelected = useSelector((state: RootState) => state.cars.carSelected);
  const [carActive, setCarActive] = useState<number>(
    carSelected?.photos.length === 1 ? 0 : 1
  );
  const navigate = useNavigate();
  let urlBrand: string = "";

  if (carSelected) {
    urlBrand = carSelected.logo_brand;
  }

  const changeCarActiveColor = useCallback((index: number) => {
    setCarActive(index);
  }, []);

  return (
    <s.Container>
      <Header />
      <s.Content>
        <s.Container_Type>
          <s.ImageBrand src={urlBrand} />
          <s.Container_Details>
            <s.Name>
              {carSelected?.brand} {carSelected?.model}
            </s.Name>
            <s.Price>
              ${carSelected?.price}/{carSelected?.period}
            </s.Price>
          </s.Container_Details>
        </s.Container_Type>
        <s.Container_Body>
          <s.Button onClick={() => navigate("/")} fullFilling={false}>
            <AiOutlineArrowLeft color="#313136" size={24} />
            Back to Catalog
          </s.Button>
          <s.Container_BookNow>
            <s.ImageUp
              src={carSelected?.photos[carActive].photo}
              width={783}
              height={408}
            />
            <s.Button onClick={() => navigate("/")} fullFilling={true}>
              Book Now
              <AiOutlineArrowRight color="white" size={24} />
            </s.Button>
          </s.Container_BookNow>
        </s.Container_Body>
        <s.Description>
          <s.Number>0{carActive + 1}</s.Number>
          <s.Color>{carSelected?.photos[carActive].color}</s.Color>
        </s.Description>
        <s.Area_Change_Car>
          <SliderCars
            ImagesCar={carSelected ? carSelected.photos : null}
            indexActive={carActive}
            handleGoCar={changeCarActiveColor}
          />
        </s.Area_Change_Car>
      </s.Content>
    </s.Container>
  );
};
