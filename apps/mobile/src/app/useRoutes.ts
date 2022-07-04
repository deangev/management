import React from 'react';
import { routes } from '@management/core/routes';
import { Home } from '@management/features/home';
import { EstatesList } from '@management/features/estate';
import { Estate, EstateWizard } from '@management/features/estate';
import {
  ServiceCall,
  ServiceCallsList,
} from '@management/features/service-calls';
import { ServiceCallWizard } from '@management/features/service-calls';
import { Worker, WorkerList, WorkerWizard } from '@management/features/worker';
import {
  Supplier,
  SupplierList,
  SupplierWizard,
} from '@management/features/supplier';

const routesComponentsDictionary = {
  home: Home,
  estates: EstatesList,
  estate: Estate,
  'estate-wizard': EstateWizard,
  maintenance: EstateWizard,
  'service-call': ServiceCall,
  'service-calls': ServiceCallsList,
  'service-call-wizard': ServiceCallWizard,
  reports: EstateWizard,
  workers: WorkerList,
  worker: Worker,
  'worker-wizard': WorkerWizard,
  suppliers: SupplierList,
  supplier: Supplier,
  'supplier-wizard': SupplierWizard,
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
