/*global alert, confirm, console, Debug, opera, prompt, WSH */

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import { CountryCode, CountryCodeNew } from './../data/countryCode';

class FlatListCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: '',
      refreshing: false
    };
  }

  componentDidMount() {
    this.setState({ dataSource: CountryCode });
  }

  onRefresh = () => {
    this.setState({ dataSource: CountryCodeNew, refreshing: true });
    this.endRefresh();
  }
  endRefresh = () => {
    this.setState({ refreshing: false });
  }

  renderItem = ({ item }) => {
    const { label, dial_code, id } = item;
    return (
          <View style={styles.itemView}>
            <TouchableOpacity
              onPress={() => { alert(label); }}
            >
              <Text style={styles.item}>{label}</Text>
              <Text style={styles.item}>{dial_code}</Text>
              <Text style={styles.item}>{id}</Text>
            </TouchableOpacity>
          </View>
      );
    }

  render() {
    return (
      <View style={styles.container}>
      <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20 }}>
        <TouchableHighlight
          onPress={() => { this.refs.dataList.scrollToIndex({ index: 4 }); }}
        >
          <Text> ScrollToEnd </Text>
        </TouchableHighlight>
      </View>
      <FlatList
        data={this.state.dataSource}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.id}
        numColumns={1}
        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}
        ref='dataList'
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
  itemView: {
    flex: 1,
    backgroundColor: 'lightblue',
    margin: 5,
    padding: 10,
    justifyContent: 'center',
  }
});


export default FlatListCom;
