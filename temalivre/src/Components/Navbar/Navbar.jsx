import logo from './Logo.png';
import * as S from './styled';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return(
    <S.Navbar>
      <Link to="/">
        <S.Img src={logo} alt="Chainsaw Man"/>
      </Link>
      

      <S.List>
        <S.ListItem>
          <S.LinkedPage to="/">Home</S.LinkedPage>
        </S.ListItem>

        <S.ListItem>
          <S.LinkedPage to="/create">Create</S.LinkedPage>
        </S.ListItem>

        <S.ListItem>
          <S.LinkedPage to="/deleteall">Delete All</S.LinkedPage>
        </S.ListItem>

        <S.ListItem>
          <S.LinkedPage to="/about">About</S.LinkedPage>
        </S.ListItem>

      </S.List>
    </S.Navbar>
  )
}