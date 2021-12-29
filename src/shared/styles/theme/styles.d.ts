import "styled-components";
import {DefaultThemeExoticCars} from './index'

type theme = typeof DefaultThemeExoticCars;

declare module 'styled-components' {
    export interface DefaultTheme extends theme{}
}