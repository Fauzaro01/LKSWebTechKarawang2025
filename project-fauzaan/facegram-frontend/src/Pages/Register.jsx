import React, { useState, useContext } from "react";
import Navbar from "./Components/Navbar";
import axios from "axios";
import { ResContext } from "./Context/ResContext";
import { useNavigate } from "react-router";

const URL_API = 'http://localhost:8000/api/v1';

function RegisterPage() {
    const [formData, setformData] = useState({
        full_name: '',
        bio: '',
        username: '',
        password: '',
        is_private: false
    });
    
    const dataset = useContext(ResContext);
    const navigate = useNavigate();
    
    async function munculkan() {
        console.log(formData);
        await axios.post(URL_API+'/auth/register', formData).then((response) => {
            dataset.masukanUser(response.data.user);
            dataset.gantiToken(response.data.token);
            localStorage.setItem('token', response.data.token)
            navigate('/dashboard');
        });

    }

    return (
      <>
        <Navbar />
        <div className="container h-75 d-flex align-items-center">
          <div className="card mx-auto">
            <div className="card-header">Register Page</div>
            <div className="card-body">
              <div className="input-group mb-3">
                <span className="input-group-text">FullNames</span>
                <input type="text" className="form-control" onChange={(e) => {setformData({...formData, [e.target.name] : e.target.value})}} name="full_name" />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Bio</span>
                <input type="text" className="form-control" onChange={(e) => {setformData({...formData, [e.target.name] : e.target.value})}} name="bio" />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Username</span>
                <input type="text" className="form-control" onChange={(e) => {setformData({...formData, [e.target.name] : e.target.value})}} name="username" />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Password</span>
                <input type="text" className="form-control" onChange={(e) => {setformData({...formData, [e.target.name] : e.target.value})}} name="password" />
              </div>
              <button className="btn btn-warning" onClick={munculkan}>Kirim</button>
            </div>
          </div>
        </div>
      </>
    );
}

export default RegisterPage;