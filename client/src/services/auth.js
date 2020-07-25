import axios from 'axios';

const signup = (firstName, lastName, email, password, address, placeId) => {
  return axios
    .post('/signup', { firstName, lastName, email, password, address, placeId })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

const login = (email, password) => {
  return axios
    .post('/login', { email, password })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

const logout = () => {
  return axios
    .delete('/logout')
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

export { signup, login, logout };
