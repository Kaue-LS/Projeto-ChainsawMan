import * as S from './styled'

export default function Card(props){

    return(

        <S.CardArea>
            <S.CardImage src={props.url} alt={props.name}/>;
            {
                props.name.length>=10?(
                    <S.Name2 className='name'>{props.name}</S.Name2>
                ):(
            <S.Name className='name'>{props.name}</S.Name>
                )
            }
        </S.CardArea>
    )

}