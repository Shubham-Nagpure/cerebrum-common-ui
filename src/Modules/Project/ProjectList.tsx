import { Row, Col, Card } from 'antd';
import { data } from '../../mock-json/ProjectList.json';

const ProjectList: React.FC = () => {
  return (
    <Row gutter={[16, 16]}>
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
  );
};

export default ProjectList;
