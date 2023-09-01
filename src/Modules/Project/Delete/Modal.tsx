import React from 'react';
import { Button, Modal } from 'antd';

interface DeleteProjectConfirmationModalProps {
  open: boolean;
  onDelete: () => void;
  onCancel: () => void;
}

const ConfirmModal: React.FC<DeleteProjectConfirmationModalProps> = ({
  open,
  onDelete,
  onCancel
}) => {
  return (
    <Modal
      open={open}
      onOk={onDelete}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={onDelete}>
          Delete
        </Button>
      ]}
    >
      <div
        style={{
          fontSize: '18px',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          margin: '30px'
        }}
      >
        Are you sure you want to delete the project?
      </div>
    </Modal>
  );
};

export default ConfirmModal;
