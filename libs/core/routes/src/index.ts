const routes = [
  {
    name: 'home',
    title: 'עמוד ראשי',
    enableMainMenu: false,
  },
  {
    name: 'estates',
    title: 'רשימת בניינים',
    icon: 'building',
    enableMainMenu: true,
  },
  {
    name: 'estate',
    title: 'בניין',
    enableMainMenu: false,
  },
  {
    name: 'estate-form',
    title: 'צור בניין חדש',
    enableMainMenu: false,
  },
  {
    name: 'maintenance',
    title: 'תחזוקה',
    icon: 'maintenance',
    enableMainMenu: false,
  },
  {
    name: 'service-calls',
    title: 'קריאות שירות',
    icon: 'service',
    enableMainMenu: true,
  },
  {
    name: 'reports',
    title: 'דוחות',
    icon: 'document',
    enableMainMenu: true,
  },
  {
    name: 'employees',
    title: 'עובדים',
    icon: 'workers',
    enableMainMenu: true,
  },
  {
    name: 'suppliers',
    title: 'ספקים',
    icon: 'package',
    enableMainMenu: true,
  },
  {
    name: 'daily-schedule',
    title: 'תכנון יומי',
    icon: 'plan',
    enableMainMenu: true,
  },
];

export { routes };
