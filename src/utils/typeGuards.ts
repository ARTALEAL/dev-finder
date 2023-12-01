import { GitHubUser } from '../Components/types';

export const isGithubUser = (user: any): user is GitHubUser => {
  return 'id' in user;
};
