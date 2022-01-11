import * as s from './styles'

export const ItemCarNavigation : React.FC<{imageUrl: string}> = ({imageUrl}) => {
    return (
        <s.Container>
            <s.Image src={imageUrl}/>
        </s.Container>
    )
}