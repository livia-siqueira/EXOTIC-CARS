import { useSelector } from "react-redux";
import { Header } from "../../components/Header";
import { RootState } from "../../store/types";
import * as s from "./styles";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "../../shared/Icons/";
import { ItemCarNavigation } from "../../components/ItemNavigationCar";
import { useCallback, useState } from "react";

export const DetailsCars = () => {
  const carSelected = useSelector((state: RootState) => state.cars.carSelected);
  const [carActive, setCarActive] = useState<number>(1);
  const photoSelect = carSelected?.photos[carActive];
  
  let urlBrand: string = "";
  if (carSelected) {
    urlBrand = carSelected.logo_brand;
  }

  let controlPhotos = carSelected?.photos.map((photo, index) => {
    if (index === 1) {
      return photoSelect;
    }
    return photo;
  });


  const handleBackCar = useCallback(() => {
    setCarActive((number) => {
      if (number === 0) {
        return number + 2;
      }
      return number - 1;
    });
  }, []);

  const handleGoCar = useCallback(() => {
    setCarActive((number) => {
      if (number > 1) {
        return number - 2;
      }
      return number + 1;
    });
  }, []);
  
  return (
    <s.Container>
      <Header />
      <s.Content>
        <s.Container_Type>
          <img src={urlBrand} />
          <s.Container_Details>
            <s.Name>
              {carSelected?.brand} {carSelected?.model}
            </s.Name>
            <s.Price>{carSelected?.price}</s.Price>
          </s.Container_Details>
        </s.Container_Type>
        <s.Container_Body>
          <s.Button>
            <AiOutlineArrowLeft color="gray" size={16} />
            Back to Catalog
          </s.Button>
          <s.ImageUp
            src={carSelected?.photos[carActive].photo}
            width={783}
            height={408}
          />
          <s.Description>
            <s.Number>01</s.Number>
            <s.Color>{carSelected?.photos[carActive].color}</s.Color>
          </s.Description>
        </s.Container_Body>
        <s.Area_Change_Car>
          <s.ButtonBack onClick={handleBackCar}>
            <AiOutlineArrowLeft color="white" />
          </s.ButtonBack>
          <s.AreaCars>
            {controlPhotos?.map((image, index) => {
              console.log(index);
              return <ItemCarNavigation imageUrl={image ? image.photo : ""} />;
            })}
          </s.AreaCars>
          <s.ButtonGo onClick={handleGoCar}>
            <AiOutlineArrowRight color="white" />
          </s.ButtonGo>
        </s.Area_Change_Car>
      </s.Content>
    </s.Container>
  );
};
