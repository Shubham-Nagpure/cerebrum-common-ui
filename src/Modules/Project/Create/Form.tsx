import { useState } from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

import CreateProjectFormModal from './Modal';

interface ValuesI {
  name: string;
  description: string;
}

const Form: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const onCreate = (values: ValuesI) => {
    console.log('Received values of form: ', values);
    setOpen(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
        danger
      >
        + {t('Create Project')}
      </Button>
      <CreateProjectFormModal
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};

export default Form;
