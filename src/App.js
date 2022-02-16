import { Routes, Route } from 'react-router-dom';

import Layout from '@/components/Layout';
import Menu from '@/components/Menu';
import ColorGame from '@/games/ColorGame';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Menu />} />
        <Route path='colors' element={<ColorGame />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
