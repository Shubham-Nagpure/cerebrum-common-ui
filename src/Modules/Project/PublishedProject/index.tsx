import { Space } from 'antd';

import SubHeader from '../../../SharedComponents/SubHeader';
import ProjectList from '../ProjectList';

import { data } from '../__test__/mock-json/ProjectList.json';
import '../project.scss';

const PublishedProject: React.FC = () => {
  const handleButton = () => {};
  const isDataAvailable = data.length !== 0;

  return (
    <Space direction="vertical" size="middle">
      <SubHeader
        title="Published"
        handleButton={handleButton}
        isDraft={false}
        isDataAvailable={isDataAvailable}
      />
      <ProjectList
        data={data}
        handleButton={handleButton}
        isDraft
        isDataAvailable={isDataAvailable}
      />
    </Space>
  );
};

export default PublishedProject;
