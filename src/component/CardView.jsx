import { Button, Card } from "react-bootstrap";

const CardView = ({ person, onClick, onDelete }) => {
  // To calculate the age from the Birth-date
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  return (
    <>
      {/* Card Component : A scalable component in which the details and methods are passed as props  */}
      <Card style={{ width: "20rem" }} className="mb-3 rounded border">
        {person.avatar && (
          <Card.Img
            variant="top"
            style={{ width: "20rem", height: "20rem", objectFit: "cover" }}
            src={person.avatar}
          />
        )}
        <Card.Body style={{ padding: "20px" }}>
          <Card.Header style={{ fontSize: "20px" }}>
            Name: <b>{person.name}</b>
          </Card.Header>
          <Card.Text>
            Email : <b>{person.email}</b>
          </Card.Text>
          <Card.Text>
            Age : <b>{calculateAge(person.dob)}</b>
          </Card.Text>
          <Card.Text>
            Country : <b> {person.country}</b>
          </Card.Text>
          <Button
            variant="dark"
            style={{ marginRight: "10px" }}
            onClick={() => onClick(person)}
          >
            Update
          </Button>
          <Button variant="danger" onClick={() => onDelete(person)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardView;
