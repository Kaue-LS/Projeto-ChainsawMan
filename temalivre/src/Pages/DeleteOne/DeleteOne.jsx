import { Title } from '../../Components/Title/styled'
import { Api } from '../../Api/Api'
import { useHistory } from 'react-router'
import {useState} from 'react'
import Loading from '../../Components/Loading/Loading'
import * as S from './styled'
export default function DeleteOne(props) {
  
    // console.log(props.location.state)
    const item=props.location.state

    const history = useHistory();
    const[loading,setLoading]= useState(false)

    const goToHome= ()=>{
        history.push('/')
    }
    const goToItem=()=>{
        history.push(`/view/${item._id}`,item)
    }
    const clickHandler = async event =>{
        setLoading(true)
        event.preventDefault();

        await Api.buildApiDeleteRequest(Api.deleteUrl(item._id))
        .catch(e=>{
            console.log('Error to delte the Characther')
        })
        goToHome()
    }
    return(
        <>
        {
          loading ===true ? (<Loading/>):(
          <S.Area className='delete'>
          <Title>Deletar Personagem</Title>
    
          <S.Text>Você tem certeza que quer deletar o personagem   <S.Name>{item.name} </S.Name> ?</S.Text>
          <S.ButtonArea>
            <S.ButtonCancel onClick={goToItem} >Cancelar</S.ButtonCancel>
            <S.ButtonDelete onClick={clickHandler} >Deletar</S.ButtonDelete>
          </S.ButtonArea>
        </S.Area>
          )
        }
      </>
    )
}