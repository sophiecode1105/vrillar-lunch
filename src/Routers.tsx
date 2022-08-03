import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Game from './page/Game';

const Routers = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
