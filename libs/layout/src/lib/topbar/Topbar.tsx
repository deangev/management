import { AppBar, Box, IconButton, styled, Toolbar } from '@mui/material';
import { Logo } from '@sagi/core/assets';
import { BiMenu } from 'react-icons/bi';

export interface TopbarProps {
  open: boolean;
  handleDrawer: () => void;
}

export function Topbar({ open, handleDrawer }: TopbarProps) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </Box>
        <IconButton
          color="inherit"
          edge="end"
          onClick={handleDrawer}
          sx={{ ...(open && { display: 'none' }) }}
        >
          <BiMenu />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

const LogoContainer = styled('div')({
  width: '80px',
  display: 'grid',
  placeItems: 'center',
});
export default Topbar;
