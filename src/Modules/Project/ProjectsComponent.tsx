import { useTranslation } from 'react-i18next';
import { Row, Space, Input } from 'antd';

import ProjectList from './ProjectList';
import CreateProject from './Create/index';

const ProjectsComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Row gutter={[16, 16]} style={{ padding: '16px', margin: 0 }}>
      <Space direction="vertical" size="middle">
        <Space.Compact>
          <Space wrap>
            <CreateProject />
          </Space>
          <Input.Search
            placeholder={t('Search')}
            //   onSearch={handleSearch}
            enterButton
          />
        </Space.Compact>
      </Space>
      <ProjectList />
    </Row>
  );
};

export default ProjectsComponent;
