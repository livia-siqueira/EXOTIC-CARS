import React, { useCallback, useEffect, useState } from "react";
import { Button, Location } from "@components/";
import * as s from "./styles";
import { getCarsAsync } from "../../store/reducers/car/thunk";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/types";
import { FiMenu, AiOutlineSearch } from "@shared/";

const MenuLateral : React.FC = () => {
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

export const Header : React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleCars = useCallback(() => {
    dispatch(getCarsAsync());
  }, [dispatch]);

  useEffect(() => {
    handleCars();
  }, [handleCars]);
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
