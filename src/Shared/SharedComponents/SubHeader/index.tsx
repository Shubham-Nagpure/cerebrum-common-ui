import { Space } from 'antd';
import Search from 'antd/es/input/Search';

import Project from '../../../Modules/Project/Create';

import './subHeader.scss';

interface IProjectComponent {
  handleButton: () => void;
  title: string;
  isDraft: boolean;
  isDataAvailable: boolean;
}

const SubHeader: React.FC<IProjectComponent> = ({
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
          {isDraft && <Project />}
        </>
      )}
    </Space>
  );
};

export default SubHeader;
