import ProjectDraft from '../modules/project/ProjectDraft';
import PublishedProject from '../modules/project/PublishedProject';

import { DRAFT_PROJECT, PUBLISHED_PROJECT } from './RoutesConstants';

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
