'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

class DetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    console.log('state', state);
    return {
    headerTitle: `${state.params.title}`,
    headerStyle: {
      backgroundColor: 'black'
    },
    headerTitleStyle: {
      color: 'red'
    },
    headerTintColor: 'red'
  };
}

  constructor(props) {
    super(props);

    this.state = {
      hello: ''
    };
  }

componentDidMount() {
  const { state } = this.props.navigation;
  this.setState({ hello: state.params.key });
}

  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.state.hello}
        </Text>

        <TouchableHighlight
          style={{ padding: 10, backgroundColor: 'red', margin: 20 }}
          onPress={() => this.props.navigation.goBack()}
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


export default DetailScreen;
