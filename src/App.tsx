import { Container } from './Components/Container';
import { Header } from './Components/Header';
import { Search } from './Components/Search';

function App() {
  return (
    <Container>
      <Header />
      <Search hasError onSubmit={() => {}} />
    </Container>
  );
}

export default App;
