import { Typography } from 'antd';

import { useTranslate } from '@/hooks/common-hooks';
import styles from './index.less';

const { Title } = Typography;

const LoginRightPanel = () => {
  const { t } = useTranslate('login');
  return (
    <section className={styles.rightPanel}>
      {/* Background image covering the right panel */}
      <div className={styles.backgroundImage}></div>
    </section>
  );
};

export default LoginRightPanel;
