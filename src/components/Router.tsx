import { Route, Routes } from 'react-router-dom';

import PageHome from '../pages/Home';

import NotFound from './NotFound';

function Router() {
  return (
    <Routes>
      <Route element={<NotFound />} path="*" />
      <Route element={<PageHome />} index />
    </Routes>
  );
}

export default Router;
