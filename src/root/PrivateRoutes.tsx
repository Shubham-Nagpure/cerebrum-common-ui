import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { DASHBOARD_PATH } from './routesConstants';
import WithLayout from './WithLayout';

interface IRoute {
  route: {
    element: React.ReactNode;
    includeHeader: boolean;
    includeSidebar: boolean;
    path: string;
  };
}

const PrivateRoute: React.FC<IRoute> = ({ route }) => {
  const authToken = 'this is auth';
  //if authtoken is not present then clear localstorage and login reducer and redirect user to login page
  useEffect(() => {
    if (!authToken) {
      localStorage.clear();
      <Navigate to={DASHBOARD_PATH} replace={true} />;
    }
  }, [authToken]);

  const finalComponent = WithLayout(
    route.element,
    route.includeHeader,
    route.includeSidebar
  );

  return authToken ? (
    finalComponent
  ) : (
    <Navigate to={DASHBOARD_PATH} replace={true} />
  );
};

export default PrivateRoute;