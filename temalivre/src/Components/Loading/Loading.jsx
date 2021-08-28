import animation from '../Loading/pochita.gif';
import './loading.scss';
import * as S from './styled'

export default function Loading(){
    return(
        <S.Spinner>
      <S.Img className='spinner' src={animation}></S.Img>
        </S.Spinner>
    )
}