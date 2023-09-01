import { useState } from 'react';
import { message } from 'antd';
import { useTranslation } from 'react-i18next';

import { CustomButton } from '../../../shared/SharedComponents';
import CreateProjectFormModal from './Modal';

import projectApi from '../../../services/api/project';
import { IProjectFromValues } from '../types';

const Form: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [createProject] = projectApi.useCreateProjectsMutation();
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const successMessage = () => {
    messageApi.open({
      type: 'success',
      content: 'Project created successfully!',
      className: 'custom-class',
      style: {
        margin: '90vh 0vh 0vh 0vh'
      }
    });
  };

  const onCreate = (values: IProjectFromValues) => {
    values['account_id'] = '2ebd6592-5184-4865-92a5-1e1979559f1f';
    createProject(values).then(() => {
      successMessage();
    });
    setOpen(false);
  };

  return (
    <div>
      {contextHolder}
      <CustomButton
        className="create-button-style"
        handleButton={() => {
          setOpen(true);
        }}
        type="primary"
        title={t('Create Project')}
      />
      <CreateProjectFormModal
        open={open}
        onCreateOrUpdate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
        type="create"
      />
    </div>
  );
};

export default Form;
