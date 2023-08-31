import { Row, Col, Card } from 'antd';

import CustomButton from '../../../SharedComponents/CustomButton';
import noProjects from '../../../assets/images/project-management.png';

import '../project.scss';

interface IProject {
  project_name: string;
  last_activity: number;
  created_by: string;
  created_on: string;
}

interface IProjectList {
  data: Array<IProject>;
  handleButton: () => void;
  isDraft: boolean;
  isDataAvailable: boolean;
}

const ProjectList: React.FC<IProjectList> = ({
  data,
  handleButton,
  isDraft,
  isDataAvailable
}) => {
  return isDataAvailable ? (
    <Row gutter={[16, 16]} style={{ margin: 0 }}>
      {data.map(project => (
        <Col span={8}>
          <div
            className={
              isDraft ? 'card-color-strip-purple' : 'card-color-strip-green'
            }
          ></div>
          <Card className="card-style" bordered={false}>
            <span className="project-title">{project.project_name}</span>
            <br />
            <span className="card-text">
              {`Edited ${project.last_activity} mins ago`}{' '}
            </span>
            <br />
            <span className="card-text">
              {`Created by ${project.created_by} on ${project.created_on}`}
            </span>
          </Card>
        </Col>
      ))}
    </Row>
  ) : (
    <>
      <Col span={6} offset={10}>
        <img src={noProjects} alt="No Projects" width={150} />
      </Col>
      <Col span={6} offset={10}>
        <CustomButton
          className="create-button-style"
          handleButton={handleButton}
          type="primary"
          title="+ Create Project"
        />
      </Col>
    </>
  );
};

export default ProjectList;
