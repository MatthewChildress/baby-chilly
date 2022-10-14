import Head from 'next/head';
export interface ISeo {
  sampleTextProp?: string;
  children?: React.ReactNode;
}

const Seo: React.FC<ISeo> = () => {
  return (
    <Head>
      <meta name="description" content="stuff"></meta>
    </Head>
  );
};

export default Seo;
