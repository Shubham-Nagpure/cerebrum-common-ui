import { Spin } from 'antd';

import './index.scss';

const CustomSpinner: React.FC = () => {
  return (
    <div className="spinner-style">
      <Spin />
    </div>
  );
};

export default CustomSpinner;
