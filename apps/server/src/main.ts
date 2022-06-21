import app from './app';

app
  .listen({ port: process.env.port || 3000 })
  .then(({ url }) => console.log(`Server running at ${url}`));
