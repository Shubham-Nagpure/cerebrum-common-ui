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
  isDataAvailable;
  return (
    <Space wrap align="end">
      <p className="list-title">{title}</p>

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
    </Space>
  );
};

export default SubHeader;
