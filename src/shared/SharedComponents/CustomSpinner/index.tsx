import { Spin } from 'antd';
import { Loading3QuartersOutlined } from '@ant-design/icons';

import './index.scss';

const CustomSpinner: React.FC = () => {
  return (
    <div className="spinner-style">
      <Spin indicator={<Loading3QuartersOutlined style={{ fontSize: 26 }} spin />} />
    </div>
  );
};

export default CustomSpinner;
