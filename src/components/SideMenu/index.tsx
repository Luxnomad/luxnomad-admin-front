import { List } from '@mui/material';
import styled from 'styled-components';

import { navs } from '@@components/SideMenu/nav';
import SideMenuItem from '@@components/SideMenu/parts/SideMenuItem';
import { NavItem } from '@@components/SideMenu/types';
import { USER_PERMISSION } from '@@constants/permissions';
import { checkPermission } from '@@router/utils';
import { useAppState } from '@@store/hooks';

const StyledSideMenu = styled.div<{ $visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  flex: 0 0 auto;
  width: ${({ $visible }) => ($visible ? 250 : 0)}px;
  background: #333;
  height: 100vh;
  overflow-y: scroll;

  transition: width 0.2s;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function SideMenu() {
  const { permission } = useAppState((state) => state.auth);
  const visibleMenu = useAppState((state) => state.home.visibleMenu);
  const filteredNavs = navs.filter(({ permission: pagePermission }) => checkPermission(pagePermission ?? USER_PERMISSION.READ, permission) || true);

  return (
    <StyledSideMenu $visible={visibleMenu}>
      <List>
        {filteredNavs.map((nav: NavItem) => (
          <SideMenuItem key={nav.path} navItem={nav} />
        ))}
      </List>
    </StyledSideMenu>
  );
}

export default SideMenu;
