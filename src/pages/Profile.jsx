import { useEffect } from "react";
import { useAuth } from "../store/auth.js";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const auth = useAuth();
  const nav = useNavigate();
  useEffect(() => {
    if (!auth.ensureAccess()) {
      nav("/login");
    } else {
      document.title = "SAYAKAT — Profile";
    }
  }, []);
  if (!auth.user) return null;
  return (
    <div className="container" style={{ paddingTop: 28 }}>
      <div className="card">
        <h2>Profile</h2>
        <p>
          <strong>Name:</strong> {auth.user.name}
        </p>
        <p>
          <strong>Email:</strong> {auth.user.email}
        </p>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn outline" onClick={() => auth.logout()}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}