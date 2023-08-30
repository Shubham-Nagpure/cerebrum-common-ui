import './index.scss';

const PopOverContent: React.FC = hide => {
  return (
    <div className="pop-over-content">
      <ul>
        <li>
          <a onClick={hide}>English</a>
        </li>
        <li>
          <a onClick={hide}>عربي</a>
        </li>
      </ul>
    </div>
  );
};

export default PopOverContent;
