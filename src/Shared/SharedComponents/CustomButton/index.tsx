import { Button } from 'antd';
import { ButtonType } from 'antd/es/button';

interface ICustomButton {
  handleButton: () => void;
  type: ButtonType;
  title: string;
  className: string;
}

const CustomButton: React.FC<ICustomButton> = ({
  handleButton,
  type,
  title,
  className
}) => {
  return (
    <Button className={className} type={type} onClick={handleButton}>
      {title}
    </Button>
  );
};

export default CustomButton;
