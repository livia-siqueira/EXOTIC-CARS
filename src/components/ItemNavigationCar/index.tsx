import * as s from './styles'

export const ItemCarNavigation = (props : {imageUrl: string}) => {
    return (
        <s.Container>
            <s.Image src={props.imageUrl}/>
        </s.Container>
    )
}