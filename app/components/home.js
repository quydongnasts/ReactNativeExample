'use strict';

import React, { Component } from 'react';
import { Icon } from 'react-native-elements';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

class HomeScreen extends Component {
  // static navigationOptions = {
  //     tabBarLabel: 'Home',
  //     tabBarIcon: ({ tintColor }) => (
  //       <Icon name='home' type='font-awesome' color={tintColor} />
  //     ),
  //   };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <TouchableHighlight
          style={{ padding: 10, backgroundColor: 'red' }}
          onPress={() => navigate('DetailScreen', { key: 'Thanks!', title: 'Detail Screen' })}
        >
        <Text>
          HomeScreen
        </Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


export default HomeScreen;
