import "./App.css";
import PersonForm from "./component/PersonForm";

function App() {
  return (
    <div className="app">
      <h1
        style={{
          fontSize: "40px",
          backgroundColor: "grey",
          width: "100%",
          textAlign: "center",
          borderRadius: "15px",
          color: "white",
        }}
      >
        Person Management
      </h1>
      <PersonForm />
    </div>
  );
}

export default App;
