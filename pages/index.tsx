//import Hero from '../components/common/hero/Hero';
//import Section from '../components/common/section/Section';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
//import Specifics from '../components/ui/specifics/Specifics';
import Form from '../components/common/form/Form';
import type { NextPageWithLayout } from './page';
const Home: NextPageWithLayout = () => {
  return (
    <>
      <p className="text-4xl flex items-center justify-center">
        Our site is still under constuction
      </p>
      <br />
      <p className="text-3xl flex justify-center items-center">
        The form works for RSVPing though!
      </p>
      <p className="text-xl flex justify-center items-center">
        Check back by Sunday (October 2nd) for the FAQ, Registry, and Directions
      </p>
      <Form />
      {/*       <Hero />
      <Section>
        <Specifics />
      </Section>
      <Section /> */}
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
