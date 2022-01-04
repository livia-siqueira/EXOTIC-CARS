import * as s from './styles';

interface propsButton {
    title: string;
}

export const Button = ({title} : propsButton) => {
    return (
        <s.Container isBorder={title === 'Sign up' ? false : true}>
            {title}
        </s.Container>
    )
}