import Project from '../Modules/Project/index';

import { PROJECTS_PATH } from './routesConstants';

const RoutesConfig = [
  {
    path: PROJECTS_PATH,
    includeHeader: true,
    includeSidebar: true,
    element: <Project />,
    isProtected: true,
    key: 'Project'
  }
];

export default RoutesConfig;
