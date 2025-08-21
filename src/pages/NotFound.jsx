import { useEffect } from "react";
export default function NotFound() {
  useEffect(() => {
    document.title = "SAYAKAT — 404";
  }, []);

  return (
    <div className="container" style={{ paddingTop: 28 }}>
      <div className="card">
        <h2>404</h2>
        <p>Page not found</p>
      </div>
    </div>
  );
}