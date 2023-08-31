import { Space } from 'antd';
import Search from 'antd/es/input/Search';

import CustomButton from '../CustomButton';

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
    <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p className="list-title">{title}</p>
      {isDataAvailable && (
        <>
          <Search
            placeholder="Search Project"
            // onSearch={onSearch}
            enterButton
            allowClear
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
