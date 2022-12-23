import axios from 'axios';

// const API_URL = 'http://localhost:3030/';
// const API_URL = 'http://localhost:8080/api/auth/';
const API_URL = 'http://rms.sdenet.co.kr/api/auth/';

const login = (email, password) => {
  return axios
    .post(`${API_URL}signin`, {
      email,
      password,
    })
    .then(response => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
        console.log(response.data.accessToken);
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

//   register(username, email, password) {
//     return axios.post(API_URL + 'signup', {
//       username,
//       email,
//       password,
//     });
//   }

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const AuthService = {
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
