import jwt from 'jsonwebtoken';

export const getToken = (username: string) => {
  return jwt.sign({ username }, process.env['JWT_SECRET'] as string);
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env['JWT_SECRET'] as string) as {
    username: string;
  };
};
