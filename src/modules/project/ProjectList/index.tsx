import { Row, Col, Card } from 'antd';
import { useTranslation } from 'react-i18next';

import NoProjectComponent from './NoProjectsComponent';
import ProjectMenu from '../ProjectMenu';
import { CustomSpinner } from '../../../shared/SharedComponents';

import {
  formatDateToDDMMYYYY,
  formatDistanceFromToday
} from 'shared/sharedUtils/dateUtils';
import { IProjectList } from '../types';

import '../project.scss';

const ProjectList: React.FC<IProjectList> = ({
  isLoading,
  data,
  handleButton,
  isDataAvailable,
  isDraft
}) => {
  const { t } = useTranslation();

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
                {`${t('Edited')} ${formatDistanceFromToday(project.created_at)} ${t(
                  'ago'
                )}`}
              </span>
              <br />
              <span className="card-text">
                {`${t('Created by')} ${project.created_by.name} ${t(
                  'on'
                )} ${formatDateToDDMMYYYY(project.created_at)}`}
              </span>
            </Card>
          </Col>
        ))}
      </Row>
    ) : (
      <NoProjectComponent handleButton={handleButton} />
    )
  ) : (
    <CustomSpinner />
  );
};

export default ProjectList;
