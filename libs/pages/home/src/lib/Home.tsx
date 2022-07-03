import React from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import MainMenu from './main-menu/MainMenu';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={style.pageWrapper}>
          <MainMenu />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  pageWrapper: {
    padding: 10,
  },
});

export default Home;
