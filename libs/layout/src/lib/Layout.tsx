import { Box } from '@mui/material';
import { ReactNode, useCallback, useMemo, useState } from 'react';
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

  const props = useMemo(
    () => ({
      open,
      handleDrawer,
      drawerWidth: DRAWER_WIDTH,
    }),
    [open, handleDrawer]
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <Topbar {...props} />
      <Drawer {...props} />
      <Content>{children}</Content>
    </Box>
  );
}

export default Layout;
