import { Button } from 'antd';

interface ICustomButton {
  handleButton: () => void;
  type: string;
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
