import { Space } from 'antd';

import ProjectList from '../ProjectList';
import SubHeader from '../../../Shared/SharedComponents/SubHeader';

import projectApi from '../../../services/api/project';

import '../project.scss';

const PublishedProject: React.FC = () => {
  const handleButton = () => {};
  const { data, isLoading } = projectApi.useGetProjectsQuery({ type: 'published' });
  const isDataAvailable = data?.data?.projects?.length !== 0;

  return (
    <Space direction="vertical" size="middle">
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
    </Space>
  );
};

export default PublishedProject;
