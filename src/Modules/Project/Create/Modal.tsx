import { Form, Input, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import projectApi from '../../../services/api/project';
import { useEffect } from 'react';

interface Values {
  name: string;
  description: string;
  account_id: string;
}

interface CreateProjectFormModalProps {
  open: boolean;
  onCreateOrUpdate: (values: Values) => void;
  onCancel: () => void;
  id?: string;
  type: 'create' | 'edit';
}

const CreateProjectFormModal: React.FC<CreateProjectFormModalProps> = ({
  open,
  type,
  id,
  onCreateOrUpdate,
  onCancel
}) => {
  const [form] = Form.useForm();
  const [getProject] = projectApi.useLazyGetProjectQuery();

  useEffect(() => {
    if (type === 'edit' && id) {
      getProject(id!)
        .unwrap()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((data: any) => {
          console.log(data);
          form.setFieldValue('name', data.data.project.name);
          form.setFieldValue('description', data.data.project.description);
        });
    }
  }, [form, getProject, type, id]);

  return (
    <Modal
      centered
      open={open}
      title={type === 'edit' ? 'Edit Project' : 'Create Project'}
      okText={type === 'edit' ? 'Update' : 'Create'}
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreateOrUpdate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="project">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Required Field' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Required Field' }]}
        >
          <TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateProjectFormModal;
