import { Space } from 'antd';

import CustomButton from '../../../Shared/SharedComponents/CustomButton';

import { INoProjectComponent } from '../types';
import noProjects from '../../../assets/images/project-management.png';

import '../project.scss';

const NoProjectComponent: React.FC<INoProjectComponent> = ({ handleButton }) => {
  return (
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
  );
};

export default NoProjectComponent;
