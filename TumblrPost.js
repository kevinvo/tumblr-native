import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';



export default class TumblrPost extends React.Component {

  render() {
    const img = {
      uri: this.props.post.photos[0].original_size.url
    };
    return (
      <View style={styles.container}>
        <Image
          style={style.image}
          source={img} />
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

const style = StyleSheet.create({
  image: {
    height: 400,
    width: 300
  }
});
