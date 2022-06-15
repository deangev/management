import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Tooltip,
} from '@mui/material';
import { Icon, IconType } from '@sagi/core/components';

export interface DrawerItemProps {
  item: {
    label: string;
    icon: string;
    path: string;
  };
  open: boolean;
}

export function DrawerItem({
  item: { label, icon, path },
  open,
}: DrawerItemProps) {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = useCallback(() => {
    navigate(path);
  }, [navigate, path]);

  const handleHover = useCallback((isOpen: boolean) => {
    setIsTooltipOpen(isOpen);
  }, []);

  return (
    <Tooltip title={label} open={isTooltipOpen && !open} placement="left" arrow>
      <ListItem
        key={label}
        disablePadding
        onClick={handleItemClick}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            px: 2.5,
            gap: 1,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              justifyContent: 'start',
            }}
          >
            <Icon icon={icon as IconType} size={19} />
          </ListItemIcon>
          <Box sx={{ opacity: open ? 1 : 0, mr: 1 }}>{label}</Box>
        </ListItemButton>
      </ListItem>
    </Tooltip>
  );
}

export default DrawerItem;
