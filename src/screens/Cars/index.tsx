import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/Header";
import { AppDispatch, RootState } from "../../store/types";
import * as s from './styles';

export const Home = () => {
    const dispatch : AppDispatch = useDispatch();
    const cars = useSelector((state: RootState) => state.cars)
    

    return (
        <s.Container> 
            
            <s.Content>
            </s.Content>
            </s.Container>

    )
}