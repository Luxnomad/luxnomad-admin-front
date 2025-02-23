import { useState } from 'react';

import { ListItemButton, ListItemIcon, ListItemText, Collapse, List } from '@mui/material';
import { Icon } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { SideMenuItemProps } from '@@components/SideMenu/types';

const StyledNavLink = styled(NavLink)`
  display: block;

  &.active {
    background: #888;
  }

  * {
    color: #fff;
  }
`;

const StyledListItemButton = styled(ListItemButton)`
  display: block;

  &.active {
    background: #888;
  }

  * {
    color: #fff;
  }
`;

function SideMenuItem({ navItem }: SideMenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  if (navItem.page && !navItem.children) {
    return (
      <StyledNavLink to={navItem.path} end>
        <ListItemButton>
          <ListItemIcon>
            <Icon>{navItem.iconName}</Icon>
          </ListItemIcon>
          <ListItemText primary={navItem.title} />
        </ListItemButton>
      </StyledNavLink>
    );
  }

  return (
    <>
      <StyledListItemButton onClick={handleOpenMenu}>
        <ListItemIcon>
          <Icon>{navItem.iconName}</Icon>
        </ListItemIcon>
        <ListItemText primary={navItem.title} />
      </StyledListItemButton>
      {navItem.children && navItem.children.length > 0 && (
        <Collapse in={isOpen} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {navItem.children.map((item) => (
              <StyledNavLink key={item.path} to={item.path} end>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Icon>{item.iconName}</Icon>
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </StyledNavLink>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
}

export default SideMenuItem;
