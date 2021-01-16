import React, { Component } from 'react'
  import Card from "react-bootstrap/Card";
  import {Link} from 'react-router-dom';
  import 'fontsource-roboto';
  import Typorgraphy from '@material-ui/core/Typography';
  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime'


class Scream extends Component {
    render() {
        dayjs.extend(relativeTime);
        const { classes, scream: {body, createdAt, userImage, userHandle, screamId} } = this.props
        return (
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            image={userImage}
          />
          <Card.Body>
            <Card.Title>{body}</Card.Title>
            <Card.Text>
              {dayjs(createdAt).fromNow()}
            </Card.Text>
            <Typorgraphy variant="h5" component={Link} to={`/users/${userHandle}`}>
                {userHandle}
            </Typorgraphy>
            <a href="#" className="btn-primary">
              See More
            </a>
          </Card.Body>
        </Card>

        )
    }
}

export default Scream;
