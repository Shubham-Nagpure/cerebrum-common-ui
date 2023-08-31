import { useState } from 'react';
import { Row, Space, Divider } from 'antd';
import Search from 'antd/es/input/Search';

import ProjectList from './ProjectList';
import CustomButton from '../../SharedComponents/CustomButton';

import { data } from '../../Modules/Project/__test__/mock-json/ProjectList.json';

import './project.scss';

interface IProjectComponent {
  handleButton: () => void;
}

const ProjectsComponent: React.FC<IProjectComponent> = ({ handleButton }) => {
  const [showDiv1Content, setShowDiv1Content] = useState(true); // State to track content in div1

  const toggleContent = () => {
    setShowDiv1Content(!showDiv1Content);
  };

  return (
    <>
      <Row
        gutter={[16, 16]}
        style={{ padding: '16px', margin: 0 }}
        className="space-align-block"
      >
        <button onClick={toggleContent}>Toggle Content</button>

        <Space wrap align="end">
          <Search
            placeholder="Search Project"
            //   onSearch={onSearch}
            enterButton
          />
          <CustomButton
            className="create-button-style"
            handleButton={handleButton}
            type="primary"
            title="+ Create Project"
          />
        </Space>
      </Row>

      <div className="div1">
        {showDiv1Content ? (
          <>
            <ProjectList
              data={data}
              title={'Draft'}
              handleButton={handleButton}
              isDraft
            />
            <Divider />
          </>
        ) : (
          <ProjectList
            data={[]}
            title={'Published'}
            handleButton={handleButton}
            isDraft={false}
          />
        )}
      </div>
      <div className="div2">
        {showDiv1Content ? (
          <>
            <ProjectList
              data={data}
              title={'Published'}
              handleButton={handleButton}
              isDraft={false}
            />
            <Divider />
          </>
        ) : (
          <ProjectList
            data={data}
            title={'Draft'}
            handleButton={handleButton}
            isDraft
          />
        )}
      </div>
    </>
  );
};

export default ProjectsComponent;
