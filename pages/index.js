import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget/index';
import Footer from '../src/components/Footer/index';
import GitHubCorner from '../src/components/GitHubCorner/index';
import QuizBackground from '../src/components/QuizBackground/index';
import QuizLogo from '../src/components/QuizLogo/index';


export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/amandasabrina" />
    </QuizBackground>
  );
}

/*
o Widget por debaixo dos panos, cada componente react é uma função mas tb tem a caracteristica de um objeto por ex Widget.Content
os `` são tag functions

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const BackgroundImage = styled.div` 
    background-image: url(${db.bg});
    flex: 1;
    background-size: cover;
    background-position: center;
`
//passou a ser o quizbackground /\

export default function Home() {
  return <Title>My page</Title>
}

function Title(props) { //propriedades
  return (
    <h1>
      {props.children}
    </h1>
  )
}

export default function Home() {
  return (
    <BackgroundImage>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The legend of Zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <p>lorem iplum sidf disf sdifsj</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem iplum sidf disf sdifsj</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </BackgroundImage>
  );
}
*/ 



