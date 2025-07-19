import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';
import styles from './styles.module.css';

type MainTemplateProps = {
  children: React.ReactNode;
};

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <section className={styles.mainTemplate}>
      <Container>
        <header>
          <Logo />
        </header>
      </Container>

      <Container>
        <Menu />
      </Container>

      <main className={styles.mainContent}>{children}</main>

      <Container>
        <Footer />
      </Container>
    </section>
  );
};

export { MainTemplate };
