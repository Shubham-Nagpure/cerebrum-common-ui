import { Row, Col, Card } from 'antd';
import './projectList.css';

interface IProject {
  project_name: string;
  last_activity: number;
  created_by: string;
  created_on: string;
}

interface IProjectList {
  data: Array<IProject>;
  title: string;
}
const ProjectList: React.FC<IProjectList> = ({ data, title }) => {
  return (
    <>
      <p className="list-title">{title}</p>
      <Row gutter={[16, 16]} style={{ margin: 0 }}>
        {data.map(project => (
          <Col span={8}>
            <Card bordered={false}>
              <h2>{project.project_name}</h2>
              <p>{`Edited ${project.last_activity} mins ago`} </p>
              <p>{`Created by ${project.created_by} on ${project.created_on}`} </p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProjectList;
