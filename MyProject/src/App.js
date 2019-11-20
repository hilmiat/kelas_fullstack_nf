/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import ListImage from './ListImage';

class App extends React.Component {
  render() {
    return (
      <View>
        <ListImage navigation={this.props.navigation} />
      </View>
    );
  }
}

export default App;
