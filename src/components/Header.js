import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import UserApi from '../api/userApi';
import { getUser } from '../redux/users/users';
import './css/Header.css';

const Header = () => {
  const [name, setName] = useState('');
  const [loginReponse, setLoginResponse] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await UserApi({ userName: name });
    if (!response.error) {
      setLoginResponse('Usercreated and logged in');
    } else if (response.user) {
      setLoginResponse('User logged in successfully');
    } else {
      setLoginResponse(response.error.userName);
    }
    dispatch(getUser(response.user));
  };
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Doctors</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">Doctors</Link>
            </li>
            <li className="nav-item">
              <Link to="/appointment-form" className="nav-link">New Appointment</Link>
            </li>

            <li className="nav-item">
              <Link to="/appointments" className="nav-link">Appointments</Link>
            </li>
          </ul>
          <div>
            <form className="d-flex align-items-center" onSubmit={handleSubmit}>
              <input className="form-control me-2 rounded-pill m-0" type="search" placeholder="UserName" aria-label="Search" onChange={(e) => setName(e.target.value)} value={name} />
              <button className="btn btn-outline-success rounded-pill" type="submit">Login</button>
            </form>
            {loginReponse ? <div className="text-start ms-2">{loginReponse}</div> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
