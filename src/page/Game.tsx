import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Main from '../components/Main';
import Selection from '../components/Selection';
import { RootState } from '../state/store';

const Container = styled.div`
  height: 100vh;
`;

const Game = () => {
  const isplaying = useSelector((state: RootState) => state.game.playing);

  return <Container>{isplaying ? <Selection /> : <Main />}</Container>;
};

export default Game;
