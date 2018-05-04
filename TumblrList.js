import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import TumblrPost from './TumblrPost';


export default class TumblrList extends React.Component {

  render() {
    console.log(this.props.posts);
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.posts}
          keyExtractor={(post) => post.id}
          renderItem={(postItem) => {
            return <TumblrPost post={postItem.item}/>
          }}
          refreshing={this.props.loading}
          onRefresh={this.props.loadMore}
          onEndReachedThreshold={0.05}
          onEndReached={this.props.loadMore}
          ListFooterComponent={() =>
            <View>
              <ActivityIndicator size='large'/>>
            </View>
          }
        />
      </View>
    );
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
