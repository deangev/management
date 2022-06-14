import { ReactNode } from 'react';
import { styled } from '@mui/material/styles';

const StyledDrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

/* eslint-disable-next-line */
export interface DrawerHeaderProps {
  children?: ReactNode;
}

export function DrawerHeader({ children }: DrawerHeaderProps) {
  return <StyledDrawerHeader>{children}</StyledDrawerHeader>;
}

export default DrawerHeader;
