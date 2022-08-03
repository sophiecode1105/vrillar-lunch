import styled from 'styled-components';
import { restaurantList } from '../utils/data';
import background from '../assets/window.jpeg';
import '@kfonts/neodgm';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-size: 50px;
  background: url(${background}) no-repeat center / 1000px;
  height: 100vh;
  position: relative;
`;

const Headline = styled.h1`
  font-family: 'Press Start 2P', cursive;
  font-size: 30px;
  color: #fff;
  margin: 30px 0;
`;

const GameContainer = styled.div`
  width: 40%;
  padding: 7px 0;
  background: #d1d1d1;
  border: 3px solid #888;
  border-top-color: #f6f6f6;
  border-left-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 180px;
  left: 600px;
`;

const Button = styled.button`
  font-family: 'Neo둥근모', 'neodgm';
  color: black;
  background-color: transparent;
  border: 2px solid #666;
  border-top-color: #f6f6f6;
  border-left-color: #f6f6f6;
  box-sizing: border-box;
  padding: 5px;
  cursor: pointer;
`;

const Block = styled(Button)`
  font-size: 8px;
`;

const SelectAll = styled(Button)`
  font-size: 20px;
  &:active {
    border: 2px solid #666;
    border-bottom-color: #f6f6f6;
    border-right-color: #f6f6f6;
  }
`;

const Input = styled.input`
  border: 3px solid #666;
  border-bottom-color: #f6f6f6;
  border-right-color: #f6f6f6;
  background-color: transparent;
`;

const SelectWrap = styled.div`
  display: flex;
`;

const Selection = () => {
  const [selectList, setSelectList] = useState<string[]>([]);

  console.log('selectList', selectList);

  return (
    <Container>
      <Headline>SELECT MENU OPTIONS</Headline>
      <GameContainer>
        <SelectWrap>
          <SelectAll
            onClick={() => {
              setSelectList(restaurantList);
            }}
          >
            전체 선택
          </SelectAll>
          <Input type="text" placeholder="메뉴 추가" />
        </SelectWrap>

        {restaurantList.map((restaurant, idx) => {
          return <Block key={`navT-${idx}`}>{restaurant}</Block>;
        })}
      </GameContainer>
    </Container>
  );
};
export default Selection;
