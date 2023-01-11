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
      <div className='login-container-active'>
        <div className='login__box'>
          <h1 className='login__title-active'>User Logged</h1>
          <div className='img__container'>
            <img
              className='img__user'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'
              alt=''
            />
          </div>
          <button className='login__btn-active' onClick={handleLogOut}>
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='login-container'>
      <div className='login__box'>
        <p className='login__p'>
          <strong>Welcome!</strong> Enter your email and password to continue
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
          <div className='login__div'>
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
    </div>
  );
};

export default Login;
