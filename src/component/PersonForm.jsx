import CardView from "./CardView";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../App.css";
import DummyCards from "./DummyCards";

const PersonForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    avatar: "",
    country: "",
  });
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [persons, setPersons] = useState([]);

  // Changing the Input fields
  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({
            ...formData,
            avatar: reader.result,
          });
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Submitting the Form
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...formData, id: Date.now() };
    setPersons([...persons, data]);
    setFormData({
      name: "",
      email: "",
      dob: "",
      avatar: "",
      country: "",
    });
    // Clear the image field
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
      fileInput.value = "";
    }
  };

  // Updating the Card Details
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedPersons = persons.map((person) =>
      person.id === selectedPerson.id ? { ...person, ...formData } : person
    );
    setPersons(updatedPersons);
    setSelectedPerson(null);

    const formElement = document.getElementById("personForm");
    if (formElement) {
      formElement.reset();
    }

    setFormData({
      name: "",
      email: "",
      dob: "",
      avatar: "",
      country: "",
    });
  };

  // Make Edits On top of previous details
  const handleEdit = (person) => {
    setSelectedPerson(person);

    setFormData({
      name: person.name,
      email: person.email,
      dob: person.dob,
      avatar: person.avatar,
      country: person.country,
    });
  };

  // Deleting the card
  const handleDelete = (personToDelete) => {
    const updatedPersons = persons.filter(
      (person) => person.id !== personToDelete.id
    );
    setPersons(updatedPersons);

    setFormData({
      name: "",
      email: "",
      dob: "",
      avatar: "",
      country: "",
    });
  };

  return (
    <div>
      <div className="form-container">
        <h2 style={{ color: "white" }}>
          {selectedPerson ? "Edit Person" : "Add new member"}
        </h2>
        <Form
          id="personForm"
          onSubmit={selectedPerson ? handleUpdate : handleSubmit}
          style={{
            gap: "20px",
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
            maxWidth: "700px",
            marginTop: "10px",
          }}
        >
          <Form.Group controlId="name">
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="dob">
            <Form.Control
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="avatar">
            <Form.Control
              type="file"
              name="avatar"
              onChange={handleChange}
              accept="image/*"
            />
          </Form.Group>

          <Form.Group controlId="country">
            <Form.Control
              type="text"
              name="country"
              placeholder="Enter your country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button
            style={{ backgroundColor: "white", color: "black", border: "none" }}
            type="submit"
          >
            {selectedPerson ? "Update" : "Add"}
          </Button>
        </Form>
      </div>

      <div
        className="horizontal-line"
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "white",
          marginTop: "50px",
        }}
      />

      {/* Card Component : A scalable component in which the details and methods are passed as props  */}
      <div className="list-container" style={{ margin: "30px" }}>
        <h2 style={{ margin: "40px" }}>List of Persons</h2>
        <div className="card-list">
          <DummyCards />
          {persons.map((person) => (
            <CardView
              key={person.id + person.email}
              person={person}
              onClick={() => handleEdit(person)}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonForm;
