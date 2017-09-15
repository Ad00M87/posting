import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Post = ({ id, title, description, img_url }) => (
  <Card fluid>
    { img_url && <Image src={img_url} /> }
    <Card.Content>
      <Card.Header>{title} - {description}</Card.Header>
    </Card.Content>
  </Card>
)

export default Post;
