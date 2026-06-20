import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { ResContext } from "../Context/ResContext";

function Navbar() {
  const navigate = useNavigate();
  const dataset = useContext(ResContext);

  async function logoutButtom() {
    await axios.post('http://localhost:8000/api/v1/auth/logout', {
      username: 'admin',
      password: 'admin123'
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then((response) => {
      if (response.status == 200) {
        dataset.setMessage("Anda Berhasil Logout!")
        localStorage.clear('token')
        navigate('/login');
        
      }
    })
  }

  return (
    <div className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          Facegram
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/#home" className="nav-link active">
                Home
              </a>
            </li>
            {localStorage.getItem('token') && (
              <>
                <li className="nav-item">
                  <a href="/profile" className="nav-link">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={logoutButtom}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
