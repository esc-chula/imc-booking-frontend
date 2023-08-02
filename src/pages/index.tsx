import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Index = () => {
  return (
    <main>
      <Navbar />
    </main>
  );
};

export default Index;