import Navbar from '@/components/Navbar';
import Booking from '@/components/index/booking';
import Faq from '@/components/index/faq';
import Info from '@/components/index/info';
import Instrument from '@/components/index/instrument';
import Rule from '@/components/index/rule';
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
      Hello kub code pang nae nae
    </main>
  );
};

export default Index;
