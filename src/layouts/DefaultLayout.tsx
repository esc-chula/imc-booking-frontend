import Navbar from '@/components/Navbar';

interface TProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: TProps) => {
  return (
    <>
      <Navbar />
      <main className='mx-auto max-w-xl space-y-8 px-7 pb-40 pt-16 lg:px-0'>
        {children}
      </main>
    </>
  );
};

export default DefaultLayout;
