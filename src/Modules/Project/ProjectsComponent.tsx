import { Row, Space, Button, Divider } from 'antd';
import Search from 'antd/es/input/Search';
import ProjectList from './ProjectList';
import { data } from '../../Modules/Project/__test__/mock-json/ProjectList.json';

const ProjectsComponent: React.FC = () => {
  return (
    <>
      <Row
        gutter={[16, 16]}
        style={{ padding: '16px', margin: 0 }}
        className="space-align-block"
      >
        <Space wrap align="end">
          <Search
            placeholder="Search Project"
            //   onSearch={onSearch}
            enterButton
          />
          <Button type="primary">+ Create Project</Button>
        </Space>
      </Row>
      <ProjectList data={data} title={'Draft'} />
      <Divider />
      <ProjectList data={data} title={'Published'} />
    </>
  );
};

export default ProjectsComponent;
