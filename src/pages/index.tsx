import Navbar from '@/components/Navbar';
import Booking from '@/components/index/Booking';
import Faq from '@/components/index/Faq';
import Info from '@/components/index/Info';
import Instrument from '@/components/index/Instrument';
import Rule from '@/components/index/Rule';
import DefaultLayout from '@/layouts/DefaultLayout';

const Index = () => {
  return (
    <main>
      <DefaultLayout>
        <Navbar />
        <Info />
        <Instrument />
        <Rule />
        <Faq />
        <Booking />
      </DefaultLayout>
    </main>
  );
};

export default Index;
