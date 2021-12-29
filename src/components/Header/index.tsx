import React, { useCallback, useEffect } from "react";
import { Button } from "../ButtonMain";
import * as s from './styles';
import {IoCalendarSharp, IoLocationSharp} from "../../shared/Icons/"
import { getAllCars } from "../../services/api/loads/allCars";
import { getCarsAsync } from "../../store/reducers/car/thunk";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/types";

export const Header = () => {
    const dispatch : AppDispatch = useDispatch();
    const cars = useSelector((state: RootState) => state.cars)
    
    const handleCars = useCallback(() => {
        dispatch(getCarsAsync());
    }, [])

    useEffect(() => {
       handleCars();
    }, [handleCars])
    console.log(cars);
    return (
        <s.Container>
            <s.Content>
                <s.Container_Titles>
                <s.TitlePrincipal>exotic</s.TitlePrincipal>
                <s.TitleSecondary>cars</s.TitleSecondary>
                </s.Container_Titles>
                <s.Local_Details>
                    <s.Content_Local_Details>
                    <IoLocationSharp color="#C4C4C4"/><s.Text_Local_Details>North Carolina, NC 90025</s.Text_Local_Details>
                    </s.Content_Local_Details>
                    <s.Content_Local_Details>
                   <IoCalendarSharp color="#C4C4C4" size={18} /> <s.Text_Local_Details_Date>11/03/2021</s.Text_Local_Details_Date>
                   </s.Content_Local_Details>
                   <s.Content_Local_Details>
                  <IoCalendarSharp color="#C4C4C4" size={18}/>  <s.Text_Local_Details_Date>12/12/2021</s.Text_Local_Details_Date>
                  </s.Content_Local_Details>
                </s.Local_Details>
                <s.Container_Buttons>
                    <Button title="Sign up"/>
                    <Button title="Sign in"/>
                </s.Container_Buttons>
            </s.Content>
        </s.Container>
    )
}
