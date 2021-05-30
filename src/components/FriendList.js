import React from "react";
import { Row, Col, Grid } from "react-flexbox-grid";
import Friend from "../models/Friend";
import FriendStatus from "./FriendStatus";

function FriendList() {
  const friends = [
    new Friend("Fyn", "1001", 38),
    new Friend("Fiona", "1002", 7)
  ];
  return (
    <Grid>
      {friends.map((e) => (
        <Row key={`friend_status_${e.id}`}>
          <Col>{`${e.name}: `}</Col>
          <Col>
            <FriendStatus friend={e} />
          </Col>
        </Row>
      ))}
    </Grid>
  );
}

export default FriendList;
