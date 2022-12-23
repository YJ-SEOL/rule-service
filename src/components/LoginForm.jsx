/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import React, { useState, useRef } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Form from 'react-validation/build/form';
// import Input from 'react-validation/build/input';
import '../scss/LoginForm.scss';

import AuthService from '../common/auth/AuthService';

// const required = value => {
//   if (!value) {
//     return (
//       <div className='alert alert-danger' role='alert'>
//         This field is required!
//       </div>
//     );
//   }
//   return null;
// };

const Login = () => {
  const navigate = useNavigate();

  const form = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const onChangeUsername = e => {
    setEmail(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleLogin = e => {
    e.preventDefault();

    setMessage('');
    setLoading(true);

    AuthService.login(email, password)
      .then(() => {
        navigate('/');
        window.location.reload();
      })
      .catch(error => {
        const resMessage = 'Please Check Your Email Address or Password';
        setLoading(false);
        setMessage(resMessage);
        console.log(error);
      });
  };

  return (
    <Form onSubmit={handleLogin} ref={form}>
      <div className='form__group'>
        {/* <div className='form__group__control'>
          <span>Email</span>
          <Input
            type='text'
            placeholder='Email'
            className='form-control'
            value={email}
            onChange={onChangeUsername}
            validations={[required]}
          />
        </div> */}

        <div className='form-floating mb-3'>
          <input
            type='valid'
            className='form-control'
            id='floatingInput'
            placeholder='name@example.com'
            value={email}
            onChange={onChangeUsername}
            required
            // validations={[required]}
          />
          <label htmlFor='floatingInput' className='form-label'>
            Email address
          </label>
        </div>

        {/* <div className='form__group'>
          <div className='form__group__control'>
            <span>Password</span>
            <Input
              type='password'
              placeholder='password'
              className='form-control'
              name='password'
              value={password}
              onChange={onChangePassword}
              // validations={[required]}
            />
          </div>
        </div> */}
        <div className='form-floating mb-3'>
          <input
            type='password'
            className='form-control'
            id='floatingPassword'
            placeholder='Password'
            value={password}
            onChange={onChangePassword}
            required
          />
          <label htmlFor='floatingPassword'>Password</label>
        </div>
      </div>

      <div className='form__group'>
        <Button type='submit' className='loginButton' disabled={loading}>
          <span>Login </span>

          {loading && <Spinner animation='grow' size='sm' />}
        </Button>
        <Button className='loginButton'>회원가입</Button>

        {message && (
          <div className='form__group'>
            <div className='alert alert-danger'>{message}</div>
            <Button className='loginButton' type='submit'>
              Login
            </Button>
          </div>
        )}
      </div>
    </Form>
  );
};

export default Login;
