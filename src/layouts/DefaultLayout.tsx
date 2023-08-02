import Navbar from '@/components/Navbar';

interface TProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: TProps) => {
  return (
    <>
      <Navbar />
      <main className='pt-16'>{children}</main>
    </>
  );
};

export default DefaultLayout;
