import { Container } from './Components/Container';
import { Header } from './Components/Header';
import { Search } from './Components/Search';
import { UserCard } from './Components/UserCard';
import { defaultUser } from '../src/mock/index';

function App() {
  return (
    <Container>
      <Header />
      <Search hasError onSubmit={() => {}} />
      <UserCard {...defaultUser} />
    </Container>
  );
}

export default App;
