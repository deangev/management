/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AddService,
  ApartmentsManagement,
  BuildingList,
  DailyPlan,
  ServiceCalls,
  Suppliers,
} from '@sagi/core/pages';
import { routes } from '@sagi/core/routes';
import { useMemo } from 'react';

type Route = {
  id: string;
  path: string;
  element: JSX.Element | null;
};

const getRouteComponent = (routeId: string): JSX.Element | null => {
  if (routeId === 'add-service') return <AddService />;
  if (routeId === 'apartments-management') return <ApartmentsManagement />;
  if (routeId === 'building-list') return <BuildingList />;
  if (routeId === 'daily-plan') return <DailyPlan />;
  if (routeId === 'service-calls') return <ServiceCalls />;
  if (routeId === 'suppliers') return <Suppliers />;
  return null;
};

const useRoutes = () => {
  const injestedRoutes: Route[] = useMemo(() => {
    return routes.reduce(
      (routesAcc: Route[], route: Omit<Route, 'element'>) => {
        routesAcc.push({
          ...route,
          element: getRouteComponent(route.id),
        });
        return routesAcc;
      },
      [] as Route[]
    );
  }, []);

  return injestedRoutes;
};

export default useRoutes;
