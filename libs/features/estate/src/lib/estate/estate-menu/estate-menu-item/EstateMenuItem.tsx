import React, { memo } from 'react';
import { maintenanceRoutes, routes } from '@management/core/routes';
import { MenuIconItem } from '@management/core/ui-components';
import { IconType } from '@management/core/icons';

/* eslint-disable-next-line */
export interface EstateMenuItemProps {
  feature: typeof routes[number] | typeof maintenanceRoutes[number];
  handlePress: (name: string) => void;
}

export const EstateMenuItem = memo(
  ({ feature: { name, icon, title }, handlePress }: EstateMenuItemProps) => {
    return (
      <MenuIconItem
        icon={icon as IconType}
        title={title}
        handlePress={() => {
          handlePress(name);
        }}
      />
    );
  }
);

export default EstateMenuItem;
