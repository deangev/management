import { Route, Routes } from 'react-router-dom';
import { Layout } from '@sagi/layout';
import useRoutes from './useRoutes';
import { Box } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { useLayoutEffect } from 'react';
import rtlPlugin from 'stylis-plugin-rtl';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

export function App() {
  const routes = useRoutes();

  return (
    <CacheProvider value={cacheRtl}>
      <div>
        <Layout>
          <Routes>
            {routes.map((route) => (
              <Route key={route.id} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Layout>
      </div>
    </CacheProvider>
  );
}

export default App;
