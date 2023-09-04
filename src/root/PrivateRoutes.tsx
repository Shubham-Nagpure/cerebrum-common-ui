import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { DRAFT_PROJECT } from './RoutesConstants';
import withLayout from './withLayout';

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
      <Navigate to={DRAFT_PROJECT} replace={true} />;
    }
  }, [authToken]);

  const finalComponent = withLayout(
    route.element,
    route.includeHeader,
    route.includeSidebar
  );

  return authToken ? finalComponent : <Navigate to={DRAFT_PROJECT} replace={true} />;
};

export default PrivateRoute;
