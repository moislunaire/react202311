import { ThemeProvider } from '../contexts/theme/component';
import { Header } from '../header/component';
import { Footer } from '../footer/component';

export const Layout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[] | null;
}) => {
  return (
    <ThemeProvider>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};
