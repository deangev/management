import React from 'react';
import { routes } from '@sagi/core/routes';
import { Home } from '@sagi/pages/home';
import { Estates } from '@sagi/pages/estates';
import { Estate, EstateForm } from '@sagi/pages/estate';
import { ServiceCalls } from '@sagi/pages/service-calls';
import { ServiceCallCreateForm } from '@sagi/pages/service-calls'

const routesComponentsDictionary = {
  'home': Home,
  'estates': Estates,
  'estate': Estate,
  'estate-form': EstateForm,
  'maintenance': EstateForm,
  'service-calls': ServiceCalls,
  'service-call-create-form': ServiceCallCreateForm,
  'reports': EstateForm,
  'employees': EstateForm,
  'suppliers': EstateForm,
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
