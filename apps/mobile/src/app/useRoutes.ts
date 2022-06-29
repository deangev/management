import React from 'react';
import { Estate, Estates, Home } from '@sagi/pages';
import { routes } from '@sagi/core/routes';

const routesComponentsDictinary = {
  home: Home,
  estates: Estates,
  estate: Estate,
  maintenance: Estate,
  'service-calls': Estate,
  reports: Estate,
  employees: Estate,
  suppliers: Estate,
  'daily-schedule': Estate,
};

const useRoutes = () => {
  const ingestedRoutes = routes.map((route) => ({
    ...route,
    component:
      routesComponentsDictinary[
        route.name as keyof typeof routesComponentsDictinary
      ],
  }));
  return ingestedRoutes;
};

export default useRoutes;
