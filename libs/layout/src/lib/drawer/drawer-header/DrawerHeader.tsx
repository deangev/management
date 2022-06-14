import { ReactNode } from 'react';
import { styled } from '@mui/material/styles';


export function DrawerHeader({ children }: DrawerHeaderProps) {
  return <StyledDrawerHeader>{children}</StyledDrawerHeader>;
}

const StyledDrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(0, 1.5),
  ...theme.mixins.toolbar,
}));


export interface DrawerHeaderProps {
  children?: ReactNode;
}

export default DrawerHeader;
