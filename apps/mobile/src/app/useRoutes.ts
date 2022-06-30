import React from 'react';
import { routes } from '@sagi/core/routes';
import { Home } from '@sagi/pages/home';
import { Estates } from '@sagi/pages/estates';
import { Estate, EstateForm } from '@sagi/pages/estate';

const routesComponentsDictinary = {
  home: Home,
  estates: Estates,
  estate: Estate,
  'estate-form': EstateForm,
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
