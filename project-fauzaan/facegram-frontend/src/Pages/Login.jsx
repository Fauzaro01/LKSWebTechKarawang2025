import React, { useContext, useState } from "react";
import Navbar from "./Components/Navbar"; 
import axios from "axios";
import { ResContext } from "./Context/ResContext";
import { useNavigate } from "react-router";

function LoginPage() {
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const URL_API = "http://localhost:8000/api/v1";
    const dataset = useContext(ResContext);
    const navigate = useNavigate();

    async function LoginButton() {
        await axios.post(URL_API+'/auth/login', userData).then(function(response) {
            dataset.gantiToken(response.data.token);
            localStorage.setItem('token', response.data.token);
            dataset.masukanUser(response.data.user);
            dataset.setMessage("Anda berhasil login pada akun", response.data.user.username);
            navigate('/dashboard');
        })
    }

    return (
      <>
        <Navbar />
        <div className="container h-75 d-flex align-items-center">
          <div className="card mx-auto">
            <div className="card-header">Login Page</div>
            <div className="card-body">
              {dataset.message && (
                <div className="alert alert-warning">{dataset.message}</div>
              )}
              <div className="input-group mb-3">
                <span className="input-group-text">Username</span>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Password</span>
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <button className="btn btn-outline-primary" onClick={LoginButton}>
                Masuk
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default LoginPage;