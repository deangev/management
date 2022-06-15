import {
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  List,
  styled,
  CSSObject,
} from '@mui/material';
import Theme from '@sagi/core/theme';
import { Icon } from '@sagi/core/components';
import DrawerHeader from './drawer-header/DrawerHeader';
import DrawerItem from './drawer-item/DrawerItem';
import { routes } from '@sagi/core/routes';

export interface DrawerProps {
  open: boolean;
  drawerWidth: number;
  handleDrawer: () => void;
}

export function Drawer({ open, drawerWidth, handleDrawer }: DrawerProps) {
  return (
    <StyledDrawer
      variant="permanent"
      open={open}
      drawerWidth={drawerWidth}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawer}>
          <Icon icon="close" size={20} />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {routes.map((item) => (
          <DrawerItem key={item.path} item={item} open={open} />
        ))}
      </List>
      <Divider />
    </StyledDrawer>
  );
}

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'drawerWidth',
})<{ drawerWidth: number }>(({ theme, open, drawerWidth }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme, drawerWidth),
    '& .MuiDrawer-paper': openedMixin(theme, drawerWidth),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const openedMixin = (theme: typeof Theme, drawerWidth: number): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: typeof Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export default Drawer;
