import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/components/Login.scss';
import facebook from '../assets/static/facebook.png';
import google from '../assets/static/google-plus.png';

const Login = ({ title }) => {

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
    console.log(form);
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>{title}</h2>
        <form className='login__container--form' onClickCapture={handleSubmit}>
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
          <Link to='/home'>
            <button className='button' >Iniciar sesión</button>

          </Link>
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

  );
};
const mapStateToProps = (state) => {
  return {
    title: state.title[0],
  };
};

export default connect(mapStateToProps, null)(Login);
