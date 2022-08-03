import styled from 'styled-components';
import red from '../assets/redbutton.png';
import green from '../assets/greenbutton.png';
import { changeGameStatus } from '../state/game';
import { useAppDispatch } from '../state/hook';
import background from '../assets/background.jpeg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 50px;
  background: url(${background}) no-repeat center / 1000px;
  height: 100vh;
`;

const Title = styled.div`
  font-size: 30px;
  font-family: 'Press Start 2P', cursive;
  margin-bottom: 100px;
  background: -webkit-linear-gradient(left, red, yellow);
  background: -o-linear-gradient(right, red, yellow);
  background: -moz-linear-gradient(right, red, yellow);
  background: linear-gradient(to right, red, yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.div`
  font-size: 15px;
  font-family: 'Press Start 2P', cursive;
  color: #fff;
  margin-bottom: 50px;
  line-height: 30px;
`;

const Button = styled.div`
  width: 150px;
  height: 50px;
  cursor: pointer;
  background: url(${red}) no-repeat center / 70%;
  &:hover {
    background: url(${green}) no-repeat center / 70%;
  }
`;

const Main = () => {
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Title>VRillAR RANDOM LUNCH</Title>
      <Subtitle>PRESS PLAY BUTTON TO SELECT A RESTAURANT</Subtitle>
      <Button
        onClick={() => {
          dispatch(changeGameStatus({ playing: true }));
        }}
      />
    </Container>
  );
};
export default Main;
