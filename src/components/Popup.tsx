import { useSelector } from 'react-redux';
import styled from 'styled-components';
import alert from '../assets/alert.jpg';
import { useAppDispatch } from '../state/hook';
import { closeModal } from '../state/popup';
import { RootState } from '../state/store';
import { Modal } from '../utils/types';

const AlertContainer = styled.div<Modal>`
  z-index: 999;
  position: fixed;
  font-size: 15px;
  font-family: 'Neo둥근모', 'neodgm';
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const Img = styled.img`
  width: 300px;
`;

const Message = styled.div`
  text-align: center;
  position: absolute;
  top: 35%;
  right: 30px;
`;

const Button = styled.button`
  width: 80px;
  opacity: 0;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  left: 110px;
`;

const Popup = () => {
  const dispatch = useAppDispatch();
  const isOpen = useSelector((state: RootState) => state.popup.isOpen);
  const message = useSelector((state: RootState) => state.popup.message);
  return (
    <AlertContainer isOpen={isOpen}>
      <Img src={alert}></Img>
      <Message>{message}</Message>

      <Button
        onClick={() => {
          dispatch(closeModal());
        }}
      >
        Ok
      </Button>
    </AlertContainer>
  );
};
export default Popup;
