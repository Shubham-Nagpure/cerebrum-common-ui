import { useTranslation } from 'react-i18next';
import { ConfigProvider } from 'antd';

import RoutesComponent from './root/RoutesComponent';

import './i18n';
import './assets/stylesheets/main.scss';

function App() {
  const { i18n } = useTranslation();

  return (
    <ConfigProvider direction={i18n?.dir(i18n.language)}>
      <RoutesComponent />
    </ConfigProvider>
  );
}

export default App;
