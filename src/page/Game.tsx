import { useSelector } from 'react-redux';
import styled from 'styled-components';
import background from '../assets/background.jpeg';
import Category from '../components/Category';
import Main from '../components/Main';
import { RootState } from '../state/store';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 50px;
  height: 100vh;
  background: url(${background}) no-repeat center / 1000px;
`;

const Game = () => {
  const isplaying = useSelector((state: RootState) => state.game.playing);

  return <Container>{isplaying ? <Category /> : <Main />}</Container>;
};

export default Game;
