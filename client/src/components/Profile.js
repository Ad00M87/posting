import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

class Profile extends React.Component {
  render() {
    return(
      <Card>
        <Image src='https://i.pinimg.com/736x/c0/44/47/c044473a5ec28012fc9cd3671f1e9c11--funny-facebook-facebook-com.jpg' />
        <Card.Content>
          <Card.Header>
            FN-2187
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Joined in 2015
            </span>
          </Card.Meta>
          <Card.Description>
            FN-2187 "Finn" is currently in a coma.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            3 Friends
          </a>
        </Card.Content>
      </Card>
    )
  }
}

export default Profile;
