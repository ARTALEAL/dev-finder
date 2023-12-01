export type LocalGitHubUser = {
  login: string;
  id: number;
  avatar: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter: string | null;
  repos: number;
  followers: number;
  following: number;
  created: string;
};

export type GitHubUser = {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

export type GitHubError = {
  message: string;
  documentation_url: string;
};

// export type GitHubUser = {
//     login: 'ARTALEAL';
//     id: 108766244;
//     node_id: 'U_kgDOBnukJA';
//     avatar_url: 'https://avatars.githubusercontent.com/u/108766244?v=4';
//     gravatar_id: '';
//     url: 'https://api.github.com/users/ARTALEAL';
//     html_url: 'https://github.com/ARTALEAL';
//     followers_url: 'https://api.github.com/users/ARTALEAL/followers';
//     following_url: 'https://api.github.com/users/ARTALEAL/following{/other_user}';
//     gists_url: 'https://api.github.com/users/ARTALEAL/gists{/gist_id}';
//     starred_url: 'https://api.github.com/users/ARTALEAL/starred{/owner}{/repo}';
//     subscriptions_url: 'https://api.github.com/users/ARTALEAL/subscriptions';
//     organizations_url: 'https://api.github.com/users/ARTALEAL/orgs';
//     repos_url: 'https://api.github.com/users/ARTALEAL/repos';
//     events_url: 'https://api.github.com/users/ARTALEAL/events{/privacy}';
//     received_events_url: 'https://api.github.com/users/ARTALEAL/received_events';
//     type: 'User';
//     site_admin: false;
//     name: 'Artem Aleksandrov';
//     company: 'Open to work';
//     blog: '';
//     location: 'St. Petersburg';
//     email: null;
//     hireable: null;
//     bio: 'Frontend Developer';
//     twitter_username: null;
//     public_repos: 30;
//     public_gists: 0;
//     followers: 6;
//     following: 22;
//     created_at: '2022-07-05T21:21:31Z';
//     updated_at: '2023-11-14T18:58:25Z';
//   };
