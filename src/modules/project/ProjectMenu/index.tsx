import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Dropdown, MenuProps, message } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

import CreateProjectFormModal from '../ProjectCreate/Modal';
import { ConfirmationModal } from '../../../shared/SharedComponents';

import projectApi from '../project.slice';
import { IProjectFromValues, IProjectMenu } from '../types';

import { messages } from '../../../shared/constants/messages';
import trash from '../../../assets/images/delete.svg';
import edit from '../../../assets/images/edit.svg';
import './index.scss';

import './index.scss';

const ProjectMenu: React.FC<IProjectMenu> = ({ id }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [openDelete, setDeleteOpen] = useState(false);
  const [openEdit, setEditOpen] = useState(false);
  const [deleteProject] = projectApi.useDeletePorjectsMutation();
  const [updateProject] = projectApi.useUpdateProjectMutation();
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = ({ key }) => {
    if (key === '1') {
      setDeleteOpen(true);
    } else {
      setEditOpen(true);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const successMessage = (message: any) => {
    messageApi.open({
      type: 'success',
      content: message,
      className: 'custom-class',
      style: {
        margin: '90vh 0vh 0vh 0vh'
      }
    });
  };

  const onDelete = () => {
    deleteProject(id!).then(() => navigate('/projects'));
    setDeleteOpen(false);
    successMessage('Project Deleted successfully!');
  };

  const onEdit = (values: IProjectFromValues) => {
    values['id'] = id;
    console.log(values);
    updateProject(values);
    successMessage('Project Updated successfully!');
    setEditOpen(false);
  };

  const items = [
    {
      label: 'Delete Project',
      key: '1',
      icon: <img src={trash} />
    },
    {
      label: 'Edit Project Details',
      key: '2',
      icon: <img src={edit} />
    }
  ];

  return (
    <>
      {contextHolder}
      <ConfirmationModal
        open={openDelete}
        confirmationMessage={messages.deleteConfirmation}
        onDelete={onDelete}
        onCancel={() => {
          setDeleteOpen(false);
        }}
      />
      {openEdit && (
        <CreateProjectFormModal
          open={openEdit}
          onCreateOrUpdate={onEdit}
          id={id}
          type="edit"
          onCancel={() => {
            setEditOpen(false);
          }}
        />
      )}
      <div className="project-menu">
        <Dropdown menu={{ items, onClick }}>
          <MoreOutlined />
        </Dropdown>
      </div>
    </>
  );
};

export default ProjectMenu;
