import { Row } from 'antd';

import ProjectList from '../ProjectList';
import { SubHeader } from '../../../shared/SharedComponents';

import projectApi from '../../../services/api/project';

import '../project.scss';

const ProjectDraft: React.FC = () => {
  const handleButton = () => {};
  const { data, isLoading } = projectApi.useGetProjectsQuery({ type: 'draft' });
  const isDataAvailable = data?.data?.projects?.length !== 0;

  return (
    <Row className="project-list">
      <SubHeader
        title="Draft"
        handleButton={handleButton}
        isDraft
        isDataAvailable={isDataAvailable}
      />
      <ProjectList
        isLoading={isLoading}
        data={data?.data?.projects || []}
        handleButton={handleButton}
        isDraft
        isDataAvailable={isDataAvailable}
      />
    </Row>
  );
};

export default ProjectDraft;
