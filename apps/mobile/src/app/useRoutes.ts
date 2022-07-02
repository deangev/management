import React from 'react';
import { routes } from '@management/core/routes';
import { Home } from '@management/pages/home';
import { Estates } from '@management/pages/estates';
import { Estate, EstateForm } from '@management/pages/estate';
import { ServiceCalls } from '@management/pages/service-calls';

const routesComponentsDictionary = {
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
      routesComponentsDictionary[
        route.name as keyof typeof routesComponentsDictionary
      ],
  }));
  return ingestedRoutes;
};

export default useRoutes;
