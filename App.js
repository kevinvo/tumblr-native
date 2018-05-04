import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TumblrList from './TumblrList.js';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: false,
      page: 0,
    }
    this.fetchWithPage = this.fetchWithPage.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  async fetchWithPage(page) {
    this.setState({
      loading: true,
    })

    const response = await fetch(`https://api.tumblr.com/v2/blog/itzahann/posts/photo?api_key=779RldqZK31ib4Bz6dOfqiIMRaZ874ySoHjk0PkQAJhUBdtR0b&limit=4&offset=${page * 4}`);
    const data = await response.json();
    this.setState({
      posts: data.response.posts,
      loading: false,
    });
  }

  async componentDidMount() {
    this.fetchWithPage(0);

  }

  async loadMore() {
    const newPage = this.state.page + 1;

    await this.fetchWithPage(newPage);
    this.setState({
      page: newPage

    });
  }


  render() {
    return (
      <TumblrList
        posts={this.state.posts}
        loadMore={this.loadMore}
        loading={this.state.loading}
      />
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
