import * as s from './styles';
import React from 'react'

interface propsButton {
    title: string;
}

export const Button : React.FC<propsButton> = ({title}) => {
    return (
        <s.Container isBorder={title === 'Sign up' ? false : true}>
            {title}
        </s.Container>
    )
}