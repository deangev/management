import React from 'react';
import { routes } from '@management/core/routes';
import { Home } from '@management/pages/home';
import { EstatesList } from '@management/pages/estate';
import { Estate, EstateWizard } from '@management/pages/estate';
import { ServiceCall, ServiceCallsList } from '@management/pages/service-calls';
import { ServiceCallWizard } from '@management/pages/service-calls';

const routesComponentsDictionary = {
  'home': Home,
  estates: EstatesList,
  estate: Estate,
  'estate-wizard': EstateWizard,
  maintenance: EstateWizard,
  'service-call': ServiceCall,
  'service-calls': ServiceCallsList,
  'service-call-wizard': ServiceCallWizard,
  reports: EstateWizard,
  employees: EstateWizard,
  suppliers: EstateWizard,
  'daily-schedule': EstateWizard,
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
