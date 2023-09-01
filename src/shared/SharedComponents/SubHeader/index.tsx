import { Col, Row, Space } from 'antd';
import Search from 'antd/es/input/Search';

import Project from '../../../modules/project/create';

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
    <Row className="sub-header-style">
      <Col span={6}>
        <p className="list-title">{title}</p>
      </Col>
      <Col span={10} offset={8}>
        {isDataAvailable && (
          <Space direction="horizontal">
            <Search
              placeholder="Search Project"
              // onSearch={onSearch}
              enterButton
              allowClear
            />
            {isDraft && <Project />}
          </Space>
        )}
      </Col>
    </Row>
  );
};

export default SubHeader;
