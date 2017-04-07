import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import ScarletScreen from './components/ScarletScreen';
import GrayScreen from './components/GrayScreen';

import BlackScreen from './components/BlackScreen';
import GoldScreen from './components/GoldScreen';
import BlueScreen from './components/BlueScreen';
import MaizeScreen from './components/MaizeScreen';

import ModalScreen from './components/ModalScreen';

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
  );
}


const App = () => {
  return (
    <Router>
      <Scene key="root">

        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
        >
          <Scene key="osu" title="OSU" icon={TabIcon}>
            <Scene
              key="scarlet"
              component={ScarletScreen}
              title="Scarlet"
            />
          </Scene>

          <Scene key="um" title="UM" icon={TabIcon}>
            <Scene
              key="blue"
              component={BlueScreen}
              title="Blue"
            />
            <Scene
              key="maize"
              component={MaizeScreen}
              title="Maize"
            />
          </Scene>

          <Scene key="vu" title="VU" icon={TabIcon}>
            <Scene
              key="gold"
              component={GoldScreen}
              title="Gold"
            />
            <Scene
              key="black"
              component={BlackScreen}
              title="Black"
            />
          </Scene>
        </Scene>
        <Scene
          key="gray"
          component={GrayScreen}
          title="Gray"
        />
        <Scene
          key="modal"
          direction="vertical"
          component={ModalScreen}
          title="Modal"
          hideNavBar
        />
      </Scene>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;