import { useEffect, useState } from "react";
import axios from "axios";

function TestAPI() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/health")
      .then(res => setMessage(res.data.status))
      .catch(err => setMessage("Erreur : " + err.message));
  }, []);

  return (
    <div>
      <h2>Test API Backend :</h2>
      <p>{message}</p>
    </div>
  );
}

export default TestAPI;