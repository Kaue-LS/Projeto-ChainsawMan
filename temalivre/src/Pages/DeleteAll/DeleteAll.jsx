import * as S from './styled'
import { Title } from '../../Components/Title/styled'
import { Api } from '../../Api/Api'
import { useHistory } from 'react-router'
import {useState} from 'react'
import Loading from '../../Components/Loading/Loading'
import './styled.scss'
export default function DeleteAll() {
  const history = useHistory();
  const goToHome = () => {
    history.push('/');

  }
  const [loading,setLoading]= useState(false)  
  const clickHandler = async event => {
    setLoading(true);

    event.preventDefault();

    await Api.buildApiDeleteRequest(Api.deleteAllUrl())
      .catch(e => { console.error('Erro ao deletar todos os dados:') })
  }
  return (
    <>
      {
        loading ===true ? (<Loading/>):(
        <S.Area className='delete'>
        <Title>Delete All</Title>
  
        <S.Text>Are you sure you want to delete all data, once executed, data cannot be recovered</S.Text>
        <S.ButtonArea>
          <S.ButtonCancel onClick={goToHome}>Cancel</S.ButtonCancel>
          <S.ButtonDelete onClick={clickHandler}>Delete</S.ButtonDelete>
        </S.ButtonArea>
      </S.Area>
        )
      }
    </>

   
  )
}
