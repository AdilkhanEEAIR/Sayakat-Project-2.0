import { useEffect, useState } from "react";
import { useAuth } from "../store/auth.js";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const auth = useAuth();
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    document.title = "SAYAKAT — Register";
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    try {
      auth.register(name, email, password);
      nav("/profile");
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <div className="container" style={{ paddingTop: 28 }}>
      <form
        className="card"
        onSubmit={onSubmit}
        style={{ maxWidth: 420, margin: "0 auto", display: "grid", gap: 10 }}
      >
        <h2>Register</h2>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid var(--border)",
            background: "transparent",
            color: "var(--text)",
          }}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid var(--border)",
            background: "transparent",
            color: "var(--text)",
          }}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid var(--border)",
            background: "transparent",
            color: "var(--text)",
          }}
        />
        <button className="btn" type="submit">
          Create account
        </button>
      </form>
    </div>
  );
}