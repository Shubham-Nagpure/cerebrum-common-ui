import { Row } from 'antd';

import ProjectList from '../ProjectList';
import { SubHeader } from '../../../shared/SharedComponents';

import projectApi from '../project.slice';

import '../project.scss';

const PublishedProject: React.FC = () => {
  const handleButton = () => {};
  const { data, isLoading } = projectApi.useGetProjectsQuery({ type: 'published' });
  const isDataAvailable = data?.data?.projects?.length !== 0;

  return (
    <Row className="project-list">
      <SubHeader
        title="Published"
        handleButton={handleButton}
        isDraft={false}
        isDataAvailable={isDataAvailable}
      />
      <ProjectList
        isLoading={isLoading}
        data={data?.data?.projects || []}
        handleButton={handleButton}
        isDraft={false}
        isDataAvailable={isDataAvailable}
      />
    </Row>
  );
};

export default PublishedProject;
