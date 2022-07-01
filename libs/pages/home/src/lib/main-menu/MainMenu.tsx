import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainMenuItem from './main-menu-item/MainMenuItem';
import { routes } from '@sagi/core/routes';
import { MainMenuType } from '../types/MainMenuType';

/* eslint-disable-next-line */
export interface MainMenuProps {}

export function MainMenu(props: MainMenuProps) {
  const navigationRoutes = routes.filter(
    (route) => route.enableMainMenu
  ) as MainMenuType[];

  return (
    <View style={style.container}>
      {navigationRoutes.map(({ name, title, icon }) => (
        <MainMenuItem key={name} name={name} title={title} icon={icon} />
      ))}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
  },
});

export default MainMenu;
