import { Row, Col, Card, Space, Spin } from 'antd';
import { format, formatDistance } from 'date-fns';

import CustomButton from '../../../SharedComponents/CustomButton';
import noProjects from '../../../assets/images/project-management.png';

import '../project.scss';

export interface IProject {
  created_at: string;
  created_by: { name: string };
  description: string;
  name: string;
  updated_at: string;
  updated_by: { name: string };
}

interface IProjectList {
  data: Array<IProject>;
  handleButton: () => void;
  isDraft: boolean;
  isDataAvailable: boolean;
  isLoading: boolean;
}

const ProjectList: React.FC<IProjectList> = ({
  isLoading,
  data,
  handleButton,
  isDraft,
  isDataAvailable
}) => {
  return !isLoading ? (
    isDataAvailable ? (
      <Row gutter={[16, 16]} style={{ margin: 0 }}>
        {data?.map(project => (
          <Col span={8}>
            <div
              className={
                isDraft ? 'card-color-strip-purple' : 'card-color-strip-green'
              }
            ></div>
            <Card className="card-style" bordered={false}>
              <span className="project-title">{project.name}</span>
              <br />
              <span className="card-text">
                {`Edited ${formatDistance(
                  new Date(),
                  new Date(project.created_at),
                  {}
                )} ago`}
              </span>
              <br />
              <span className="card-text">
                {`Created by ${project.created_by.name} on ${format(
                  new Date(project.created_at),
                  'dd MMMM yyyy'
                )}`}
              </span>
            </Card>
          </Col>
        ))}
      </Row>
    ) : (
      <Space direction="vertical" size="middle">
        <img src={noProjects} alt="No Projects" width={150} />
        <span className="new-project-text-style">Create a new project</span>
        <CustomButton
          className="create-button-style"
          handleButton={handleButton}
          type="primary"
          title="+ Create Project"
        />
      </Space>
    )
  ) : (
    <Spin />
  );
};

export default ProjectList;
