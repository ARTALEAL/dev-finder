import { Container } from './Components/Container';
import { Header } from './Components/Header';
import { Search } from './Components/Search';
import { UserCard } from './Components/UserCard';
import { defaultUser } from '../src/mock/index';
import { useState } from 'react';
import { GitHubError, GitHubUser, LocalGitHubUser } from './Components/types';
import { isGithubUser } from './utils/typeGuards';
import { extractLocalUser } from './utils/extractLocalUser';

const BASE_URL = 'https://api.github.com/users/';

function App() {
  const [user, setUser] = useState<LocalGitHubUser | null>(defaultUser);

  const getUser = async (username: string) => {
    const url = BASE_URL + username;
    const res = await fetch(url);
    const user = (await res.json()) as GitHubUser | GitHubError;
    if (isGithubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  };
  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={getUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
}

export default App;
