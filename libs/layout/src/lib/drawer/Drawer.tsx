import {
  Divider,
  Drawer as MuiDrawer,
  ListItemIcon,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  styled,
  CSSObject,
  Box,
  Tooltip,
} from '@mui/material';
import Theme from '@sagi/core/theme';
import { Icon, IconType } from '@sagi/core/components';
import DrawerHeader from './drawer-header/DrawerHeader';
import drawerItems from './drawerItems';

export interface DrawerProps {
  open: boolean;
  drawerWidth: number;
  handleDrawer: () => void;
}

export function Drawer({ open, drawerWidth, handleDrawer }: DrawerProps) {
  return (
    <StyledDrawer
      variant="permanent"
      anchor="right"
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
        {drawerItems.map((item) => (
          <Tooltip title={open ? '' : item.label} placement='left' arrow>
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: 'end',
                  }}
                >
                  <Icon icon={item.icon as IconType} size={19} />
                </ListItemIcon>
                <Box sx={{ opacity: open ? 1 : 0, mr: 1 }}>{item.label}</Box>
              </ListItemButton>
            </ListItem>
          </Tooltip>
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
  direction: 'rtl',
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
