import React from "react";
import { Card, Button } from "react-bootstrap";

// Some Dummy json for the user reference
const dummyCards = [
  {
    name: "Vamika",
    email: "user1@email.com",
    dob: 23,
    country: "India",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Aryan",
    email: "user2@email.com",
    dob: 13,
    country: "India",
    avatar:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ciri",
    email: "user3@email.com",
    dob: 33,
    country: "India",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const DummyCards = () => {
  return (
    <div className="card-list">
      {dummyCards.map((data) => {
        return (
          <Card
            style={{
              width: "20rem",
            }}
            className="mb-3 rounded border"
            key={data.email}
          >
            {data.avatar && (
              <Card.Img
                variant="top"
                style={{
                  width: "20rem",
                  height: "20rem",
                  objectFit: "cover",
                }}
                src={data.avatar}
              />
            )}
            <Card.Body style={{ padding: "20px" }}>
              <Card.Header style={{ fontSize: "20px" }}>
                Name: <b>{data.name}</b>
              </Card.Header>
              <Card.Text>
                Email : <b>{data.email}</b>
              </Card.Text>
              <Card.Text>
                Age : <b>{data.dob}</b>
              </Card.Text>
              <Card.Text>
                Country : <b> {data.country}</b>
              </Card.Text>
              <Button variant="dark" style={{ marginRight: "10px" }}>
                Update
              </Button>
              <Button variant="danger">Delete</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default DummyCards;
