import { useContext } from "react";
import Navbar from "./Components/Navbar";
import { NavLink } from "react-router";
import { ResContext } from "./Context/ResContext";

function App() {
  const dataset = useContext(ResContext);
  
  return (
    <>
      <Navbar />
      <div className="container px-5 pt-3">
        <h1 className="mt-3">Facegram</h1>
        <h4 className="text-muted">Lakukan Interaksi Sosial Mu!</h4>
        <p className="lead">
          Platform media sosial berbasis web dengan teknologi yang ada
        </p>
        <div className="container-fluid d-flex gap-3">
          {dataset.loading ? (
            null
          ) : dataset.userData ? (
            <NavLink to="/dashboard" className="btn btn-sm btn-outline-success">
              Dashboard
            </NavLink>
          ) : (
            <>
              <NavLink to="/login" className="btn btn-sm btn-primary">
                Login
              </NavLink>
              <NavLink to="/register" className="btn btn-sm btn-secondary">
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
