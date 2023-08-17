import Navbar from '@/components/Navbar';
import Booking from '@/components/index/booking';
import Faq from '@/components/index/faq';
import Info from '@/components/index/info';
import Instrument from '@/components/index/instrument';
import Rule from '@/components/index/rule';

const Index = () => {
  return (
    <>
      <Info />
      <Instrument />
      <Rule />
      <Faq />
      <Booking />
    </>
  );
};

export default Index;
