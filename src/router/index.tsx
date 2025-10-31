import { Navigate, Route, Routes } from 'react-router-dom';

import { PATH } from '@@constants/path';
import Login from '@@pages/Login';
import AuthPage from '@@router/AuthPages';
import { useAppState } from '@@store/hooks';

function Router() {
  const { token } = useAppState((state) => state.auth);

  return (
    <Routes>
      {token ? <Route path='/*' element={<AuthPage />} /> : <Route path={PATH.LOGIN} element={<Login />} />}
      <Route path='*' element={<Navigate to={token ? PATH.BOOK : PATH.LOGIN} replace />} />
    </Routes>
  );
}

export default Router;
