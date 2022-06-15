import { AppBar as MuiAppBar, Box, IconButton, Toolbar } from '@mui/material';
import { styled } from '@mui/material';
import { Logo } from '@sagi/core/assets';
import { Icon } from '@sagi/core/components';

interface TopbarProps {
  open: boolean;
  handleDrawer: () => void;
  drawerWidth: number;
}

export default function Topbar({
  open,
  handleDrawer,
  drawerWidth,
}: TopbarProps) {
  return (
    <AppBar position="fixed" open={open} drawerWidth={drawerWidth}>
      <Toolbar style={{ paddingRight: '13px'}}>
        <Box sx={{ flexGrow: 1 }}>
          <IconButton
            color="inherit"
            onClick={handleDrawer}
            edge="end"
            sx={{
              ...(open && { display: 'none' }),
            }}
          >
            <Icon icon="menu" size={19} />
          </IconButton>
        </Box>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Toolbar>
    </AppBar>
  );
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'drawerWidth',
})<{ open: boolean; drawerWidth: number }>(({ theme, open, drawerWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  color: theme.palette.text.primary,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const LogoContainer = styled('div')({
  width: '75px',
  display: 'flex',
});
