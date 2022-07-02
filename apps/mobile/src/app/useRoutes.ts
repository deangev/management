import React from 'react';
import { routes } from '@management/core/routes';
import { Home } from '@management/pages/home';
import { Estates } from '@management/pages/estates';
import { Estate, EstateForm } from '@management/pages/estate';
import { ServiceCall, ServiceCalls } from '@management/pages/service-calls';
import { ServiceCallCreateForm } from '@management/pages/service-calls';

const routesComponentsDictionary = {
  home: Home,
  estates: Estates,
  estate: Estate,
  'estate-form': EstateForm,
  maintenance: EstateForm,
  serviceCall: ServiceCall,
  'service-calls': ServiceCalls,
  'service-call-create-form': ServiceCallCreateForm,
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
