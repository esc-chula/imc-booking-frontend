import LgLogo from '#/images/lg_logo.svg';
import DefaultLayout from '@/layouts/DefaultLayout';
import Image from 'next/image';

const Home = () => {
  return (
    <DefaultLayout>
      <div className='flex flex-col items-center'>
        <Image src={LgLogo} alt='IMC logo' className='w-44 pt-6' />
      </div>
    </DefaultLayout>
  );
};

export default Home;
