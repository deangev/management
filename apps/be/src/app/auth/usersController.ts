import { getErrorResponse } from '@assignment/actions';
import { API_AUTH_URL } from '@assignment/constants';
import Axios from 'axios';
import { catchAsync } from '@assignment/utils';

const http = Axios.create({
  baseURL: API_AUTH_URL,
});

class UsersController {
  register = catchAsync(async (req, res) => {
    const { username, email, password } = req.body.user;
    if (!username || !email || !password) {
      throw getErrorResponse(422, 'Please enter all fields');
    }

    if (password.length < 6) {
      throw getErrorResponse(
        422,
        'Password must contain at least 6 characters'
      );
    }

    const registerRes = await http.post('/users', {
      username,
      email,
      password,
    });

    res.status(registerRes.status).json({ user: registerRes.data });
  });
  login = catchAsync(async (req, res) => {
    const { email, password } = req.body.user;

    if (!email) {
      throw getErrorResponse(422, "Email can't be blank");
    } else if (!password) {
      throw getErrorResponse(422, "Password can't be blank");
    }

    const loginRes = await http.post('/users/login', { email, password });

    res.status(loginRes.status).json({ user: loginRes.data });
  });
}

const controller = new UsersController();
export default controller;
