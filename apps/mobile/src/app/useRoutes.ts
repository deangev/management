import React from 'react';
import { routes } from '@sagi/core/routes';
import { Home } from '@sagi/pages/home';
import { Estates } from '@sagi/pages/estates';
import { Estate, EstateForm } from '@sagi/pages/estate';
import { ServiceCalls } from '@sagi/pages/service-calls';

const routesComponentsDictinary = {
  home: Home,
  estates: Estates,
  estate: Estate,
  'estate-form': EstateForm,
  maintenance: EstateForm,
  'service-calls': ServiceCalls,
  reports: EstateForm,
  employees: EstateForm,
  suppliers: EstateForm,
  'daily-schedule': EstateForm,
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
