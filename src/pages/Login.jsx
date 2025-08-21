import { useEffect, useState } from "react";
import { useAuth } from "../store/auth.js";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const auth = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    document.title = "SAYAKAT — Login";
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    try {
      auth.login(email, password);
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
        <h2>Login</h2>
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
          Login
        </button>
      </form>
    </div>
  );
}