import { CssBaseline } from '@mui/material';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import ApolloProvider from './app/ApolloProvider';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ApolloProvider>
      <CssBaseline />
      <App />
    </ApolloProvider>
  </StrictMode>
);
