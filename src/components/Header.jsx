import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/components/Header.scss';
import usericon from '../assets/static/user-male.png';
import map from '../assets/static/music-video.png';

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>

      <Link to='/home'>
        <img className='header__img' src={map} alt='logo' />
      </Link>

      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={usericon} alt='' />}
          <p>Perfil</p>
        </div>
        <ul>

          <li><a href='/'>Cuenta</a></li>
          <li><a href='/'>Cerrar Sesión</a></li>
        </ul>
      </div>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
