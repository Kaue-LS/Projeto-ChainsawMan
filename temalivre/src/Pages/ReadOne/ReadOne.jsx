import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import * as S from './styled'
export default function ReadOne(props){

 const[mostrar,setMostrar] = useState('Reveal Status')
    const item = props.location.state
    // const [loading,setLoading] = useState(false)

    const history = useHistory();
    // history leva para as rotas qye colocamos

    const deleteHandler = async event => {
        event.preventDefault()
        history.push(`/delete/${item._id}`,item)
    }
    // o async para esperar ate ele carregar a api
    const updateHandler = async event => {
        event.preventDefault()
        // prevent default para nao carregar a pagina
        history.push(`/update/${item._id}`,item)
        // o item no final indica que ele vai levar a item junto a nova rota
    }

    return(
        <S.FormImg className='plain'>

        <S.Form>
        <S.Character>
            <S.Image src={item.url}/>
            <S.Label>{item.name}</S.Label>
        </S.Character>
            <S.Desc>
            <S.Info>Status:   <S.ShowButton onClick={()=> setMostrar(item.status)}>
            {
                mostrar==='Reveal Status' ?(
                 "Reveal Status" 
                ):(
                    item.status 
                )
            }
            </S.ShowButton></S.Info>
            <S.Info>Genre:    <span>{item.genre}</span></S.Info>
            <S.Info>Specie:    <span>{item.specie}</span></S.Info>
            <S.Info>Contract:  
                
                 {item.contract.map((e)=>(
                <S.Contract key={e}>-{e}</S.Contract>
                 ))
            }
            </S.Info>
            
            </S.Desc>
            <S.Buttons>
            <S.EditButton onClick={updateHandler}>Edit</S.EditButton>
            <S.DeleteButton onClick={deleteHandler}>Delete</S.DeleteButton>
            </S.Buttons>
        </S.Form>
        </S.FormImg>
    )
}