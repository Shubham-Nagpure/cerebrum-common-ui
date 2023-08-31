import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { PROJECTS_PATH } from './routesConstants';
import PrivateRoute from './PrivateRoutes';
import RoutesConfig from './RoutesConfig';

export interface IRoutes {
  path: string;
  includeHeader: boolean;
  includeSidebar: boolean;
  element: React.ReactElement;
  isProtected: boolean;
  key: string;
}

const RoutesComponent: React.FC = () => {
  const getRoutes = () =>
    RoutesConfig.map((route: IRoutes) =>
      route.isProtected ? (
        <>
          <Route
            path={route.path}
            key={route.key}
            element={<PrivateRoute route={route} />}
          />
          <Route path="*" key="projects" element={<Navigate to={PROJECTS_PATH} />} />
        </>
      ) : (
        <Route key={route.key} path={route.path} element={route.element} />
      )
    );
  return (
    <BrowserRouter>
      <Routes>{getRoutes()}</Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;