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
import {registerScreens} from './_global/screens';
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
    navigatorStyle
  }
});