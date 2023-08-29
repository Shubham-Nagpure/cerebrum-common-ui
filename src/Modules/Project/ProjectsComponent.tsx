import { Row, Space, Input } from 'antd';
import ProjectList from './ProjectList';

const ProjectsComponent: React.FC = () => {
  return (
    <Row gutter={[16, 16]} style={{ padding: '16px', margin: 0 }}>
      <Space direction="vertical" size="middle">
        <Space.Compact>
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
