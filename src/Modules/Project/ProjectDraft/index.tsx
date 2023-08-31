import { Space } from 'antd';

import SubHeader from '../../../SharedComponents/SubHeader';
import ProjectList from '../ProjectList';
import projectApi from '../../../services/api/project';

import '../project.scss';

const ProjectDraft: React.FC = () => {
  const handleButton = () => {};
  const { data, isLoading } = projectApi.useGetProjectsQuery();
  const isDataAvailable = data?.length !== 0;

  return (
    <Space direction="vertical" size="middle">
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
    </Space>
  );
};

export default ProjectDraft;
