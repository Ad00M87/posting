import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import PostForm from './components/PostForm';
import Post from './components/Post';
import axios from 'axios';

class App extends Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get('/api/storm_posts')
      .then( res => this.setState({ posts: res.data }) )
  }

  addPost = (post) => {
    const { posts } = this.state;
    this.setState({ posts: [post, ...posts] })
  }

  render() {
    const { posts } = this.state;
    const stormPosts = posts.map( p => <Post key={p.id} {...p} /> );
    return (
      <div>
        <NavBar />
        <Container>
          <Grid>
            <Grid.Column width={4}>
              <Profile />
            </Grid.Column>
            <Grid.Column width={8}>
              {stormPosts}
            </Grid.Column>
            <Grid.Column width={4}>
              <PostForm addPost={this.addPost} />
            </Grid.Column>
          </Grid>
        </Container>
      </div>

    );
  }
}

export default App;
