import * as S from './styled'

export default function Card(props){

    return(

        <S.CardArea>
            <S.CardImage src={props.url} alt={props.name}/>;
            <S.Name>{props.name}</S.Name>
        </S.CardArea>
    )

}