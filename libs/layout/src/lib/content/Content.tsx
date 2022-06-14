import { ReactNode } from 'react';
import DrawerHeader from '../drawer/drawer-header/DrawerHeader';
import { Box } from '@mui/material';

export interface ContentProps {
  children: ReactNode;
}

export function Content({ children }: ContentProps) {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      {children}
    </Box>
  );
}

export default Content;
