import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    ></S.Logo>
    <S.Title>React Avançado</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Ilustratition
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente a uma tela com códigos"
    ></S.Ilustratition>
  </S.Wrapper>
)

export default Main
