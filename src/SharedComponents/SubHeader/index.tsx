import { Space } from 'antd';
import Search from 'antd/es/input/Search';

import CustomButton from '../../SharedComponents/CustomButton';

import './subHeader.scss';

interface IProjectComponent {
  handleButton: () => void;
  title: string;
  isDraft: boolean;
  isDataAvailable: boolean;
}

const SubHeader: React.FC<IProjectComponent> = ({
  handleButton,
  title,
  isDraft,
  isDataAvailable
}) => {
  return (
    <Space>
      <p className="list-title">{title}</p>
      {isDataAvailable && (
        <>
          <Search
            placeholder="Search Project"
            //   onSearch={onSearch}
            enterButton
          />
          {isDraft && (
            <CustomButton
              className="create-button-style"
              handleButton={handleButton}
              type="primary"
              title="+ Create Project"
            />
          )}
        </>
      )}
    </Space>
  );
};

export default SubHeader;
