import { Row, Col, Card } from 'antd';
import { useTranslation } from 'react-i18next';

import { dataArabic } from '../../mock-json/ProjectListArabic.json';

const ProjectList: React.FC = () => {
  const { t } = useTranslation();

  const projectList = dataArabic;

  return (
    <Row gutter={[16, 16]}>
      {projectList.map(project => (
        <Col span={8}>
          <Card bordered={false}>
            <h2>{project.project_name}</h2>
            <p>{t('Edited') + ' ' + project.last_activity + ' ' + t('mins ago')}</p>
            <p>
              {t('Created by') +
                ' ' +
                project.created_by +
                ' ' +
                t('on') +
                ' ' +
                project.created_on}
            </p>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProjectList;
