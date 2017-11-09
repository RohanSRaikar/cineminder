/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {registerScreens} from './Components/_global/screens';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation';


registerScreens();

const navigatorStyle = {
  navBarHidden:true,
  navBarTransparent: true,
};

Navigation.startSingleScreenApp({
  screen:{
    screen:'MainScreen',
    navigatorStyle,  
  }
});