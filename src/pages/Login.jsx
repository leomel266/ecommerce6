import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";

const Login = () => {
  const [isLogged, setIsLogged] = useState(false);
  const { reset, register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submit = (data) => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/users/login";
    axios
      .post(URL, data)
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem("token", res.data.data.token);
        setIsLogged(true);
        navigate("/");
      })
      .catch((err) => console.log(err));
    reset({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    const condition = localStorage.getItem("token") ? true : false;
    setIsLogged(condition);
  }, []);

  console.log(isLogged);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
  };

  if (isLogged) {
    return (
      <div>
        <h1>User Logged</h1>
        <button onClick={handleLogOut}>Logout</button>
      </div>
    );
  }

  return (
    <div className='login-container'>
      <p className='login__p'>
        Welcome! Enter your email and password to continue
      </p>
      <div className='login__suggest'>
        <p className='p__test'>Test Data</p>
        <ul className='login__test'>
          <li className='login__item'>john@gmail.com</li>
          <li className='login__item'>john1234</li>
        </ul>
      </div>
      <form className='login__form' onSubmit={handleSubmit(submit)}>
        <div className='login__div'>
          <input
            placeholder='Email'
            type='text'
            id='email'
            {...register("email")}
          />
        </div>
        <div>
          <input
            placeholder='Password'
            type='password'
            id='password'
            {...register("password")}
          />
        </div>
        <button className='login__btn'>Login</button>
      </form>
    </div>
  );
};

export default Login;
