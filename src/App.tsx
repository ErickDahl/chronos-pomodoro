import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Cycles } from './components/Cycles';
import { Input } from './components/Input';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <Input id={'task'} label={'task'} placeholder='text' />
        <Cycles />
      </Container>
    </>
  );
}

export { App };
