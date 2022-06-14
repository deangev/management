import { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import DrawerHeader from '../drawer/drawer-header/DrawerHeader';

export interface ContentProps {
  open: boolean;
  children: ReactNode;
  drawerWidth: number;
}

export function Content({ open, children, drawerWidth }: ContentProps) {
  return (
    <Main open={open} drawerWidth={drawerWidth}>
      <DrawerHeader />
      {children}
    </Main>
  );
}

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'drawerWidth',
})<{
  open?: boolean;
  drawerWidth: number;
}>(({ theme, open, drawerWidth }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));

export default Content;
