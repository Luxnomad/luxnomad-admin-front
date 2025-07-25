import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import { HeaderProps } from '@@components/Header/types';
import { logoutRequest } from '@@stores/auth/reducer';
import { toggleVisibleMenu } from '@@stores/home/reducer';

const StyledHeader = styled(Flex.Horizontal)`
  flex: 0 0 auto;
  align-self: stretch;
  height: 52px;
  border-bottom: 1px solid #aaa;
  padding: 0 10px;

  .header__menu_button {
    cursor: pointer;
  }
`;

function Header({ ...props }: HeaderProps) {
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleVisibleMenu());
  };

  const handleClickLogout = async () => {
    if (confirm('Are you sure you want to log out?')) {
      dispatch(logoutRequest());
    }
  };

  return (
    <StyledHeader {...props} alignItems='center' justifyContent='space-between'>
      <MenuIcon className='header__menu_button' onClick={handleToggleMenu} />
      <Flex.Horizontal gap={10}>
        <Button onClick={handleClickLogout} size='small'>
          Logout
        </Button>
      </Flex.Horizontal>
    </StyledHeader>
  );
}

export default Header;
