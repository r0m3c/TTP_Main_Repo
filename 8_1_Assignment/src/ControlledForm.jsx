import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  // Post
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:3000/users", {
      name,
      email,
      id,
    });
    console.log(response.data);
  };

  // GET Single user
  const handleFetch = async (event) => {
    event.preventDefault();
    const response = await axios.get(`http://localhost:3000/users/${id}`);
    console.log(response.data);
  };

  // PUT
  const handleUpdate = async (event) => {
    event.preventDefault();
    const response = await axios.put(`http://localhost:3000/users/${id}`, {
      name,
      email,
    });
    console.log(response.data);
  };

  // DELETE
  const handleDelete = async (event) => {
    event.preventDefault();
    const response = await axios.delete(`http://localhost:3000/users/${id}`);
    console.log(response.data);
  };


  return (
    <form onSubmit={handleDelete}>
      <label>
        Id:
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;