import ProjectDraft from '../Modules/Project/ProjectDraft';
import PublishedProject from '../Modules/Project/PublishedProject';

import { DRAFT_PROJECT, PUBLISHED_PROJECT } from './routesConstants';

const RoutesConfig = [
  {
    path: DRAFT_PROJECT,
    includeHeader: true,
    includeSidebar: true,
    element: <ProjectDraft />,
    isProtected: true,
    key: 'draftProject'
  },
  {
    path: PUBLISHED_PROJECT,
    includeHeader: true,
    includeSidebar: true,
    element: <PublishedProject />,
    isProtected: true,
    key: 'publishedProject'
  }
];

export default RoutesConfig;
