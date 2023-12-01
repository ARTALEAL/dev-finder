import { InfoItem, InfoItemProps } from '../InfoItem';
import { LocalGitHubUser } from '../types';
import styles from './UserInfo.module.scss';
import { ReactComponent as LocationIcon } from '../../assets/icon-location.svg';
import { ReactComponent as CompanyIcon } from '../../assets/icon-company.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icon-twitter.svg';
import { ReactComponent as WebsiteIcon } from '../../assets/icon-website.svg';

interface UserInfoProps
  extends Pick<LocalGitHubUser, 'company' | 'blog' | 'location' | 'twitter'> {}

export const UserInfo = ({
  company,
  location,
  blog,
  twitter,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <WebsiteIcon />,
      text: blog,
      isLink: true,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    },
  ];
  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => {
        return <InfoItem {...item} key={index} />;
      })}
    </div>
  );
};
