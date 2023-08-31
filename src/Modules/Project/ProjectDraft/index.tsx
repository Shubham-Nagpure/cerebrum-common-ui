import { Row } from 'antd';

import SubHeader from '../../../SharedComponents/SubHeader';
import ProjectList from '../ProjectList';

import { data } from '../../Project/__test__/mock-json/ProjectList.json';
import '../project.scss';

const ProjectDraft: React.FC = () => {
  const handleButton = () => {};
  const isDataAvailable = data.length == 0;

  return (
    <Row
      gutter={[16, 16]}
      style={{ padding: '16px', margin: 0 }}
      className="space-align-block"
    >
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
    </Row>
  );
};

export default ProjectDraft;
