import { Space } from 'antd';

import SubHeader from '../../../SharedComponents/SubHeader';
import ProjectList from '../ProjectList';

import { data } from '../../Project/__test__/mock-json/ProjectList.json';
import '../project.scss';

const ProjectDraft: React.FC = () => {
  const handleButton = () => {};
  const isDataAvailable = data.length !== 0;

  return (
    <Space direction="vertical" size="middle">
      <SubHeader
        title="Draft"
        handleButton={handleButton}
        isDraft
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

export default ProjectDraft;
