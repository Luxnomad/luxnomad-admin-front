import { ReactNode, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import Header from '@@components/Header';
import SideMenu from '@@components/SideMenu';
import { PATH } from '@@constants/path';
import { routes } from '@@router/routes';
import { useAppState } from '@@store/hooks';
import { fetchMeRequest } from '@@stores/auth/reducer';

const StyledAuthPage = styled(Flex.Horizontal)<{ $visibleMenu: boolean }>`
  padding-left: ${({ $visibleMenu }) => ($visibleMenu ? 250 : 0)}px;
  transition: padding-left 0.2s;
  height: 100vh;

  .content {
    flex: 1;
    padding: 30px;
  }
`;

function AuthPage() {
  const dispatch = useDispatch();

  const { shouldFetchMe, token } = useAppState((state) => state.auth);
  const visibleMenu = useAppState((state) => state.home.visibleMenu);

  const filteredRoutes = Object.values(routes).reduce((prev, routes) => {
    const generatedRoutes = routes.map(({ element, path, childRoutes }) => {
      const nestedRoutes = childRoutes?.map(({ path, ...props }) => <Route key={path} path={path} {...props} />);
      return (
        <Route key={path} path={path} element={element}>
          {nestedRoutes}
        </Route>
      );
      // return (
      //   <Route key={path} path={path} element={(checkPermission(pagePermission, permission) as ReactNode) ? element : <PermissionDenied />}>
      //     {nestedRoutes}
      //   </Route>
      // );
    });

    return prev.concat(generatedRoutes);
  }, [] as ReactNode[]);

  useEffect(() => {
    if (token && shouldFetchMe) {
      dispatch(fetchMeRequest());
    }
  }, [token, shouldFetchMe, dispatch]);

  return (
    <StyledAuthPage $visibleMenu={visibleMenu}>
      <SideMenu />
      <Flex.Vertical flex='1'>
        <Header />
        {/* {token ? ( */}
        <div className='content'>
          <Routes>
            {filteredRoutes}
            <Route path='*' element={<Navigate to={PATH.BOOKING} replace />} />
          </Routes>
        </div>
        {/* ) : (
          <Navigate to='/login' state={{ from: pathname }} />
        )} */}
      </Flex.Vertical>
    </StyledAuthPage>
  );
}

export default AuthPage;
