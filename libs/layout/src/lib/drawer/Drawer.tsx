import {
  Divider,
  Drawer as MuiDrawer,
  ListItemIcon,
  ListItemText,
  IconButton,
  MenuList,
  MenuItem,
} from '@mui/material';
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
    <MuiDrawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawer}>
          <Icon icon="close" size={20} />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <MenuList>
        {drawerItems.map((item) => (
          <MenuItem key={item.label}>
            <ListItemIcon>
              <Icon icon={item.icon as IconType} />
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </MenuItem>
        ))}
      </MenuList>
      <Divider />
    </MuiDrawer>
  );
}

export default Drawer;
