import { UserInfo } from '../UserInfo';
import { UserStat } from '../UserStat';
import { UserTitle } from '../UserTitle';
import { LocalGitHubUser } from '../types';
import styles from './UserCard.module.scss';

interface UserCardProps extends LocalGitHubUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img src={props.avatar} alt="User Avatar" className={styles.avatar} />
    <UserTitle name={props.name} login={props.login} created={props.created} />
    <p className={`${styles.bio} ${props.bio ? '' : `${styles.empty}`}`}>
      {props.bio || 'This profile has no bio'}
    </p>
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
    <UserInfo
      company={props.company}
      location={props.location}
      blog={props.blog}
      twitter={props.twitter}
    />
  </div>
);
