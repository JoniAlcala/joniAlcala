/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import Header from '../components/Header';
import '../assets/components/Login.scss';
import facebook from '../assets/static/facebook.png';
import google from '../assets/static/google-plus.png';

const Login = (props) => {
  const { title } = props;
  const [form, setValues] = useState({
    email: '',

  });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/home');

  };

  return (
    <>
      <Header isLogin />
      <section className='login'>
        <section className='login__container'>
          <h2>{title}</h2>
          <form className='login__container--form' onSubmit={handleSubmit}>
            <input
              name='email'
              className='input'
              type='text'
              placeholder='Correo'
              onChange={handleInput}
            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Contraseña'
              onChange={handleInput}
            />
            <button className='button'>Iniciar sesión</button>

            <div className='login__container--remember-me'>

              <label>
                <input type='checkbox' id='cbox1' value='first_checkbox' />
                {' '}
                Recuérdame
              </label>
              <a href='/register'>Olvidé mi contraseña</a>
            </div>
          </form>
          <section className='login__container--social-media'>

            <div>
              <img
                src={facebook}

              />
              {' '}
              Inicia sesión con Google
            </div>
            <div>
              <img src={google} />
              {' '}
              Inicia sesión con Google
            </div>
          </section>
          <p className='login__container--register'>
            No tienes ninguna cuenta
            <Link to='/register'>
              <a href=''>Regístrate</a>
            </Link>

          </p>
        </section>
      </section>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    title: state.title[0],
  };
};
const mapDispatchToProps = {
  loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
