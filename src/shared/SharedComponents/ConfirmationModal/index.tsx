import React from 'react';
import { Button, Modal } from 'antd';

import { IConfirmationModalProps } from '../types';

import './index.scss';

const ConfirmationModal: React.FC<IConfirmationModalProps> = ({
  open,
  confirmationMessage,
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
        <Button key="submit" className="primary" onClick={onDelete}>
          Delete
        </Button>
      ]}
    >
      <div className="confirmation-modal">{confirmationMessage}</div>
    </Modal>
  );
};

export default ConfirmationModal;
