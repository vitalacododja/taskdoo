import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./login.css";

function Signup() {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [confirmPassword, setConfirmPassword] = useState("");
     const [message, setMessage] = useState("");

     async function handleSubmit(e) {
          e.preventDefault();
          if(password === confirmPassword) {
               try {
                    const res = await axios.post( "http://localhost:5000/api/signup", {email, password});
                    console.log(res.data);
               } catch (error) {
                    setMessage(error.response?.data?.message || "Une erreur est survenue");
               }
          } else {
               setMessage("Mot de passe non conforme");
          }
     }

     return (
          <form onSubmit={handleSubmit}>
               <div className="form-container">
                    <div className="card">
                         <div className="logo-container">
                              <div className="logo"></div>
                         </div>
                         <h2>INSCRIPTION</h2>
                         <p>{message}</p>
                         <div className="form-div">
                              <label>Adresse E-mail</label>
                              <input type="email" placeholder="Votre adresse E-mail" value={email} onChange={e => setEmail(e.target.value)} required />
                              <label>Mot de passe</label>
                              <input type="password" placeholder="Votre mot de passe" value={password} onChange={e => setPassword(e.target.value)} required/>
                              <label>Confirmer le mot de passe</label>
                              <input type="password" placeholder="Rettaper le mot de passe" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required/>
                              <button type="submit">S'inscrire</button>
                              <div className="separator"><span>ou</span></div>
                              <Link to="/" className="other-button">Se connecter</Link>
                         </div>
                    </div>
               </div>
          </form>
     );
}

export default Signup;