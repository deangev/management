import { Box } from '@mui/material';
import { ReactNode, useCallback, useState } from 'react';
import Content from './content/Content';
import Drawer from './drawer/Drawer';
import Topbar from './topbar/Topbar';

export interface LayoutProps {
  children: ReactNode;
}
const DRAWER_WIDTH = 240;

export function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);

  const handleDrawer = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <Topbar open={open} handleDrawer={handleDrawer} />

      <Content open={open} drawerWidth={DRAWER_WIDTH}>
        {children}
      </Content>

      <Drawer
        drawerWidth={DRAWER_WIDTH}
        open={open}
        handleDrawer={handleDrawer}
      />
    </Box>
  );
}

export default Layout;
