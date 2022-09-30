import Head from 'next/head';
//import Footer from '../../common/footer/Footer';
//import Header from '../../common/header/Header';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Baby Chilly</title>
      </Head>
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default PrimaryLayout;
