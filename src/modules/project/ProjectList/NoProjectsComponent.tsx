import { Row, Space, Col } from 'antd';

import Project from '../create';

import { INoProjectComponent } from '../types';

import noProjects from '../../../assets/images/project-management.png';
import '../project.scss';

const NoProjectComponent: React.FC<INoProjectComponent> = () => {
  return (
    <Row justify="space-around" align="middle" className="no-project-style">
      <Col>
        <Space direction="vertical" size="middle">
          <img src={noProjects} alt="No Projects" width={150} />
          <span className="new-project-text-style">Create a new project</span>
          <Project />
        </Space>
      </Col>
    </Row>
  );
};

export default NoProjectComponent;
