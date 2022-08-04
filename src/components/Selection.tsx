import styled from 'styled-components';
import { restaurantList } from '../utils/data';
import background from '../assets/window.jpeg';
import template from '../assets/template.png';
import desk from '../assets/result.png';
import '@kfonts/neodgm';
import { useEffect, useRef, useState } from 'react';
import { createMenuData, shuffleArr } from '../utils/helper';
import { Menudata } from '../utils/types';
import Popup from './Popup';
import { useAppDispatch } from '../state/hook';
import { changeMessage } from '../state/popup';
import { changeResultPage } from '../state/game';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import logo from '../assets/logo.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-size: 50px;
  background: url(${background}) no-repeat center / 1000px;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Headline = styled.h1`
  font-family: 'Press Start 2P', cursive;
  font-size: 30px;
  color: #fff;
  margin: 30px 0;
`;

const SystemBox = styled.div`
  width: 500px;
  height: 500px;
  background: url(${template}) no-repeat center / 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Contents = styled.div`
  overflow-y: scroll;
  width: 90%;
  height: 70%;
  margin: 0 auto;
`;

const Handler = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 10px;
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

const SelectAll = styled(Button)`
  font-size: 15px;
  width: 30%;
  &:active {
    border: 2px solid #666;
    border-bottom-color: #f6f6f6;
    border-right-color: #f6f6f6;
  }
`;

const ShuffleButton = styled(Button)`
  font-size: 15px;
  &:active {
    border: 2px solid #666;
    border-bottom-color: #f6f6f6;
    border-right-color: #f6f6f6;
  }
`;

const Board = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Label = styled.label`
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Neo둥근모', 'neodgm';
  font-weight: 400;
  padding: 0;
  ::before {
    content: '';
    height: 10px;
    width: 10px;
    top: 3px;
    margin-right: 5px;
    padding-right: 2px;
    border: 2px inset #d5d5d5;
    background: white;
    box-shadow: -1px -1px 0 0 #828282;
  }
`;

const MenuInput = styled.input`
  display: none;
  &:checked + ${Label}::before {
    content: '✔';
  }
`;

const Section = styled.section`
  overflow: hidden;
  height: 18px;
  font-size: 18px;
  font-family: 'Neo둥근모', 'neodgm';
  position: absolute;
  color: #fff;
  top: 110px;
`;

const MenuWrap = styled.div``;

const DoneButton = styled.button`
  font-size: 20px;
  position: absolute;
  bottom: 10px;
  right: 190px;
  cursor: pointer;
  opacity: 0;
`;

const Input = styled.input`
  border: 4px solid #666;
  border-bottom-color: #f6f6f6;
  border-right-color: #f6f6f6;
  background-color: transparent;
  font-family: 'Neo둥근모', 'neodgm';
  width: 70%;
`;

const ResultImg = styled.img`
  width: 55%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Logo = styled.img`
  width: 15%;
  position: absolute;
  top: 40px;
`;

const Selection = () => {
  const dispatch = useAppDispatch();
  const isSelected = useSelector((state: RootState) => state.game.isSelected);

  const [menuList, setMenuList] = useState<Menudata[]>([]);
  const [newMenu, setNewMenu] = useState('');
  const [selectList, setSelectList] = useState<Menudata[]>([]);
  const [allSelected, setAllSelected] = useState(false);
  const [result, setResult] = useState('');

  const shuffleTarget = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const initalMenu = createMenuData(restaurantList);
    setMenuList(initalMenu);
  }, []);

  const onAllSelect = () => {
    const checkboxes = document.getElementsByName('menu-input');

    let flag = allSelected;
    if (!flag) {
      flag = true;
      setAllSelected(flag);
      checkboxes.forEach((checkbox) => {
        (checkbox as HTMLInputElement).checked = flag;
      });
      setMenuList((menus) => menus.map((menu) => ({ ...menu, select: flag })));
    } else {
      flag = false;
      setAllSelected(flag);
      checkboxes.forEach((checkbox) => {
        (checkbox as HTMLInputElement).checked = flag;
      });
      setMenuList((menus) => menus.map((menu) => ({ ...menu, select: flag })));
    }
  };

  const onAddNewMenu = () => {
    if (newMenu.length === 0) return;
    const includes = menuList.filter((menu) => menu.name.includes(newMenu));
    if (includes.length) return dispatch(changeMessage({ message: '이미 존재하는 메뉴입니다.' }));
    setMenuList((menuList) => {
      const last = menuList[menuList.length - 1];
      return menuList.concat({ id: last.id + 1, name: newMenu, select: false });
    });
    setNewMenu('');
  };

  const onSelected = () => {
    const total = menuList.filter(({ select }) => select);
    if (total.length < 3) return dispatch(changeMessage({ message: '메뉴를 3개이상 선택해주세요.' }));
    setSelectList(menuList.filter(({ select }) => select));
    dispatch(changeResultPage({ isSelected: true }));
  };

  const onSelect = ({ id, select }: { id: number; select: boolean }) => {
    console.log('작동');
    setMenuList((menus) =>
      menus.map((menu) => {
        console.log('진입');
        if (menu.id === id) menu.select = !select;
        return menu;
      })
    );
  };

  const shuffle = ({ start, end, duration, render, finished }: any) => {
    const now = performance.now();
    const items = shuffleArr([...(shuffleTarget.current?.childNodes as any)]);
    requestAnimationFrame(function move(time) {
      let timefraction = (time - now) / duration;
      const value = end * timefraction;
      const index = Math.floor(value % items.length);
      render(items, index);

      if (timefraction > 1) finished(items[index]);
      else requestAnimationFrame(move);
    });
  };

  const onShuffleMenu = () => {
    shuffle({
      start: 0,
      end: 100,
      duration: 3000,
      render: (items: any, index: any) => {
        if (!items[index]) return;
        items.forEach((item: any) => (item.style.display = 'none'));
        items[index].style.display = 'block';
      },
      finished: (result: any) => setResult(result.innerText),
    });
  };

  return (
    <Container>
      <Headline>SELECT MENU OPTIONS</Headline>
      <Popup />
      <SystemBox>
        {isSelected ? (
          <ResultContainer>
            <ResultImg alt="" src={desk} />
            <ShuffleButton
              onClick={() => {
                onShuffleMenu();
              }}
            >
              메뉴고르기시작
            </ShuffleButton>
            <Logo alt="" src={logo} />
            <Section ref={shuffleTarget}>
              {selectList.map((menu, idx) => {
                return <div key={`result-${idx}`}> {menu.name}</div>;
              })}
            </Section>
          </ResultContainer>
        ) : (
          <Contents>
            <Handler>
              <Input
                type="text"
                placeholder="메뉴 추가"
                value={newMenu}
                onChange={(e) => {
                  setNewMenu(e.target.value);
                }}
                onKeyUp={(event) => (event.key === 'Enter' ? onAddNewMenu() : '')}
              />
              <SelectAll
                onClick={() => {
                  onAllSelect();
                }}
              >
                {allSelected ? '전체 해제' : '전체 선택'}
              </SelectAll>
            </Handler>

            <MenuWrap>
              {menuList.map((menu, idx) => {
                return (
                  <Board key={`menu-${idx}`}>
                    <MenuInput type="checkbox" id={String(idx)} name="menu-input" />
                    <Label
                      htmlFor={String(idx)}
                      onClick={() => {
                        onSelect({ id: menu.id, select: menu.select });
                      }}
                    >
                      {menu.name}
                    </Label>
                  </Board>
                );
              })}
            </MenuWrap>
          </Contents>
        )}

        <DoneButton
          disabled={isSelected}
          onClick={() => {
            onSelected();
          }}
        >
          선택완료
        </DoneButton>
      </SystemBox>
    </Container>
  );
};
export default Selection;
