import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../ButtonMain";
import * as s from "./styles";
import {
  AiOutlineArrowLeft,
  IoCalendarSharp,
  IoLocationSharp,
} from "../../shared/Icons/";
import { getAllCars } from "../../services/api/loads/allCars";
import { getCarsAsync } from "../../store/reducers/car/thunk";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/types";
import { Location } from "../Location";
import { FiMenu, AiOutlineSearch } from "../../shared/Icons/";

const MenuLateral = () => {
  const [menu, setMenu] = useState(false);
  const [location, setLocation] = useState(false);
  const changeState = useCallback(() => {
    menu ? setMenu(false) : setMenu(true);
  }, [menu]);

  const changeStateLocation = useCallback(() => {
    location ? setLocation(false) : setLocation(true);
  }, [location]);

  return (
    <s.Container_Menu>
      <s.ButtonMenu onClick={changeStateLocation}>
        <AiOutlineSearch size={24} />
      </s.ButtonMenu>
      <s.ButtonMenu onClick={changeState}>
        <FiMenu size={24} />
      </s.ButtonMenu>
      {location && (
        <s.AreaSearchClicked>
          <Location />
        </s.AreaSearchClicked>
      )}
      <s.Content_Menu>
        {menu && (
          <s.Menu>
            <s.Button>Sign Up</s.Button>
            <s.Button>Sign in</s.Button>
          </s.Menu>
        )}
      </s.Content_Menu>
    </s.Container_Menu>
  );
};

export const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  const cars = useSelector((state: RootState) => state.cars);

  const handleCars = useCallback(() => {
    dispatch(getCarsAsync());
  }, []);

  useEffect(() => {
    handleCars();
  }, [handleCars]);
  console.log(cars);
  return (
    <s.Container>
      <s.Content>
        <s.Container_Titles>
          <s.TitlePrincipal>exotic</s.TitlePrincipal>
          <s.TitleSecondary>cars</s.TitleSecondary>
        </s.Container_Titles>
        <s.AreaSearch>
          <Location />
        </s.AreaSearch>
        <MenuLateral />
        <s.Container_Buttons>
          <Button title="Sign up" />
          <Button title="Sign in" />
        </s.Container_Buttons>
      </s.Content>
    </s.Container>
  );
};
