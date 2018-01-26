import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

class Profile extends Component {
  render() {
    const { myCoverImg, urlImg, onPress } = this.props;
    return (
      <View style={styles.coverImg}>
        <TouchableHighlight
          onPress={onPress}
        >
        <Text>{myCoverImg}</Text>
        </TouchableHighlight>
        <View style={styles.profileImg}>
          <Image
            style={{ width: 80, height: 80 }}
            source={{ uri: `${urlImg}` }}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  coverImg: {
    flex: 1,
    margin: 5,
    backgroundColor: 'lightblue',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  profileImg: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'white',
    marginLeft: 30,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray'
  }
});

export default Profile;
