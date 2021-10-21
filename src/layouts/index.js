import styles from './index.css';
import { HeaderPage } from '../pages/components/header'

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <HeaderPage />
      {props.children}
    </div>
  );
}
export default BasicLayout;
