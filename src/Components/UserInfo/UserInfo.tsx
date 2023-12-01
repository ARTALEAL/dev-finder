import styles from './UserInfo.module.scss';

interface UserInfoProps {}

export const UserInfo = ({}: UserInfoProps) => (
  <div className={styles.userInfo}>UserInfo Component</div>
);
