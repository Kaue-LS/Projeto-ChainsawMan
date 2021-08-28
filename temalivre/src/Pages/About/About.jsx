import { Title } from '../../Components/Title/styled';
import { Paragraph } from '../../Components/Paragraph/styled';
// import { Font } from '../../Components/font-to-a-chainsaw/Font';
import * as S from './styled';
import me from './Photo.jpg.png';

export default function About() {
  return(
    <>
      <Title>Sobre</Title>
      <Paragraph>O projeto se trata de trabalho para conhecer melhor sobre o React.jS com a manutenção do Banco de Dados CRUD. O tema escolhido foi o anime Dr
        anime Dragon Ball onde pode adicionar o personagem, imagens e suas caracteristicas.
      </Paragraph>


      <Title>Quem sou eu?</Title>
  
        <S.Img src={me}></S.Img>
    

      <Paragraph>Meu nome é Kauê, teho 17 anos, sou aluno do curso de informatica da Blue Edtech além de cursar na Escola Técnica Centro Paula Souza, Etec de Ilha Solteira, no interior de São Paulo.</Paragraph>

      <Paragraph>Caso queira entrar em contato, você pode me enviar mensagem nesses sites:</Paragraph>


        <a href="https://github.com/Kaue-LS" target="_blank" rel="noopener noreferrer"><i className="im im-github"></i></a>
        <a href="https://www.linkedin.com/in/kau%C3%AA-leite-8bb83320b/" target="_blank" rel="noopener noreferrer"><i className="im im-linkedin"></i></a>
        <a href="mailto:kaue.ls0506@gmail.com" target="_blank" rel="noopener noreferrer"><i className="im im-mail"></i></a>
  
    </>
  )
}