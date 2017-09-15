import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

class PostForm extends React.Component {
  state = { title: '', description: '', file: '' }

  onDrop = (files) => {
    this.setState({ file: files[0] })
  }

  handleChangeT = (e) => {
    this.setState({ title: e.target.value })
  }

  handleChangeD = (e) => {
    this.setState({ description: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    const { title, description, file } = this.state;
    data.append('title', title);
    data.append('description', description);
    data.append('img', file);
    axios.post('/api/storm_posts', data)
      .then( res => {
        this.props.addPost(res.data)
        this.setState({ title: '', description: '', file: ''})
      })
  }

  render() {
    return(
      <div>
      <h2>Add a New post!</h2>
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          required
          label="Title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleChangeT}
        />
        <Form.TextArea
          required
          label="Description"
          placeholder='Description'
          value={this.state.description}
          onChange={this.handleChangeD}
        />
        <Dropzone
            style={
              {
                marginBottom: '10px',
                border: 'dashed 1px black',
                width: '100%',
                height: '50px',
                textAlign: 'center'
              }
            }
            onDrop={this.onDrop}
            multiple={false}
          >
            Want to add an image?
          </Dropzone>
        <Button type='submit'>Submit</Button>
      </Form>
      </div>
    )
  }
}

export default PostForm;
