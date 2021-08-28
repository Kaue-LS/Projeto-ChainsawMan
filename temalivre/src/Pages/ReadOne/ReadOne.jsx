import { useHistory } from 'react-router-dom'
import * as S from './styled'
export default function ReadOne(props){


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
        <S.Form>
            <S.Image src={item.url}/>
            <S.Label>{item.name}</S.Label>
            <S.Info>Status: <span>{item.status}</span></S.Info>
            <S.Info>Genre: <span>{item.genre}</span></S.Info>
            <S.Info>Specie: <span>{item.specie}</span></S.Info>
            <S.Info>Contract: <span>{item.contract}</span></S.Info>

            <S.Button onClick={updateHandler}>Edit</S.Button>
            <S.Button onClick={deleteHandler}>Delete</S.Button>

        </S.Form>
    )
}