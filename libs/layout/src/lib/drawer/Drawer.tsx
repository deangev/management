import {
  Divider,
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material';
import { BiChevronLeft, BiMenu } from 'react-icons/bi';
import DrawerHeader from './drawer-header/DrawerHeader';

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
          <BiChevronLeft />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <BiChevronLeft /> : <BiMenu />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <BiChevronLeft /> : <BiMenu />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </MuiDrawer>
  );
}

export default Drawer;
