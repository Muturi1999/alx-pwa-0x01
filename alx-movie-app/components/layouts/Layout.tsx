import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="p-4">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
