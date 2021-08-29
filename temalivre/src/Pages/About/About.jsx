import { Title } from '../../Components/Title/styled';
import { Paragraph } from '../../Components/Paragraph/styled';
import * as S from './styled';
import me from './Photo.jpg.png';

export default function About() {
  return(
    <S.Area>
      <Title>Sobre</Title>
      <Paragraph>The project is about work to get to know better about React.jS with the maintenance of the CRUD Database. The chosen theme was the
        Chainsaw Man manga where you can add the character, images and their attributes.
      </Paragraph>


      <S.ImgArea>
        <S.Img src={me}></S.Img>
      </S.ImgArea>

      <Paragraph>My name is Kauê, I'm 17 years old, I'm a computer course student at Blue Edtech in addition to attending the Technical School of Centro Paula Souza, at Etec de Ilha Solteira located in the interior of São Paulo.

</Paragraph>

      <Paragraph>If you want to get in touch, you can send me a message on these sites:</Paragraph>

    <S.Icon>
        <a href="https://github.com/Kaue-LS" target="_blank" rel="noopener noreferrer"><i className="im im-github"></i></a>
        <a href="https://www.linkedin.com/in/kau%C3%AA-leite-8bb83320b/" target="_blank" rel="noopener noreferrer"><i className="im im-linkedin"></i></a>
        <a href="mailto:kaue.ls0506@gmail.com" target="_blank" rel="noopener noreferrer"><i className="im im-mail"></i></a>
    </S.Icon>
    </S.Area>
  )
}