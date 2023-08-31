import { Row, Col, Card, Space } from 'antd';

import CustomButton from '../../../Shared/SharedComponents/CustomButton';
import CustomSpinner from '../../../Shared/SharedComponents/CustomSpinner';

import {
  formatDateToDDMMYYYY,
  formatDistanceFromToday
} from '../../../Shared/SharedUtils/dateUtils';
import { IProjectList } from '../types';
import noProjects from '../../../assets/images/project-management.png';
import '../project.scss';
import ProjectMenu from '../ProjectMenu';

const ProjectList: React.FC<IProjectList> = ({
  isLoading,
  data,
  handleButton,
  isDataAvailable,
  isDraft
}) => {
  return !isLoading ? (
    isDataAvailable ? (
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        {data?.map(project => (
          <Col sm={8} md={8} lg={8}>
            <Card
              className={`card-style ${
                isDraft ? 'draft-card-border' : 'published-card-border'
              }`}
              bordered={false}
            >
              {isDraft && <ProjectMenu id={project.id} />}
              <span className="project-title">{project.name}</span>
              <br />
              <span className="card-text">
                {`Edited ${formatDistanceFromToday(project.created_at)} ago`}
              </span>
              <br />
              <span className="card-text">
                {`Created by ${project.created_by.name} on ${formatDateToDDMMYYYY(
                  project.created_at
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
    <CustomSpinner />
  );
};

export default ProjectList;
