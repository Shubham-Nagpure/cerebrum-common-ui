import { Form, Input, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';

interface Values {
  name: string;
  description: string;
}

interface CreateProjectFormModalProps {
  open: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}

const CreateProjectFormModal: React.FC<CreateProjectFormModalProps> = ({
  open,
  onCreate,
  onCancel
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      centered
      open={open}
      title="Create Project"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="project"
        initialValues={{ name: '', description: '' }}
      >
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
