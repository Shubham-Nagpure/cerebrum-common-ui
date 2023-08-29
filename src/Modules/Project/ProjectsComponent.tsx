import { Row, Space, Input } from 'antd';
import ProjectList from './ProjectList';
import CreateProject from './Create/index';

const ProjectsComponent: React.FC = () => {
  return (
    <Row gutter={[16, 16]} style={{ padding: '16px', margin: 0 }}>
      <Space direction="vertical" size="middle">
        <Space.Compact>
          <Space wrap>
            <CreateProject />
          </Space>
          <Input.Search
            placeholder="Search"
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
