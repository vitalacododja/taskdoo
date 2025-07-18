import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
     e.preventDefault();
     try {
          const res = await axios.post("http://localhost:5000/api/login", { email, password });
          localStorage.setItem("token", res.data.token);
          setMessage("Connexion réussie !");
     } catch (err) {
          setMessage(err.response?.data?.message || "Erreur lors de la connexion");
     }
  };

  return (
    <form onSubmit={handleSubmit}>
          <div className="form-container">
               <div className="card">
                    <div className="logo-container">
                         <div className="logo"></div>
                    </div>
                    <h2>CONNEXION</h2>
                    <p>{message}</p>
                    <div className="form-div">
                         <label>Adresse E-mail</label>
                         <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
                         <label>Mot de passe</label>
                         <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} required />
                         <button type="submit">Se connecter</button>
                         <div className="separator"><span>ou</span></div>
                         <Link to="/signup" className="other-button">S'inscrire</Link>
                    </div>
               </div>
          </div>
    </form>
  );
}

export default Login;
