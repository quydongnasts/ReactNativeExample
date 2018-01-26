'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

class Responder extends Component {


onResponderGrant = (evt) => {
  const { locationX, locationY } = evt.nativeEvent;
  console.log(locationX, locationY);
}
onResponderMove = () => {
  console.log('moving');
}

onResponderRelease = () => {
  console.log('end move');
}
  render() {
    return (
      <View
        style={styles.container}
        onStartShouldSetResponderCapture={() => false}
        onMoveShouldSetResponderCapture={() => false}
      >
        <View
          style={styles.childViewStyle}
          onStartShouldSetResponder={() => true}
          onMoveShouldSetResponder={() => true}
          onResponderGrant={this.onResponderGrant}
          onResponderMove={this.onResponderMove}
          onResponderRelease={this.onResponderRelease}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'stretch',
    // alignItems: 'center',
  },
  childViewStyle: {
    flex: 1,
    backgroundColor: 'lightblue',
    margin: 15,
  }
});


export default Responder;
