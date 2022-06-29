import React from 'react';
import { Estate, Estates, Home } from '@sagi/pages';

const routes = [
  { name: 'Home', component: Home },
  { name: 'Estates', component: Estates },
  { name: 'Estate', component: Estate },
];

// maybe later the routes will come from distinct lib, and we should do ingestion to the routes from here

const useRoutes = () => {
  return routes;
};

export default useRoutes;
