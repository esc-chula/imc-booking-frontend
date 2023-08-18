import LgLogo from '#/icons/lg-logo.svg';
import Image from 'next/image';
import LINELoginButton from '@/components/login/LINELoginButton';
import { NextPageWithLayout } from './_app';

const LoginPage: NextPageWithLayout = () => {
  return (
    <div className='absolute left-1/2 top-0 box-border flex h-screen min-h-full w-screen max-w-xl -translate-x-1/2 transform px-7 pb-40 pt-16 lg:px-0'>
      <div className='flex w-full flex-1 flex-col items-center justify-between'>
        <Image src={LgLogo} alt='IMC logo' className='mt-2 w-44' />
        <LINELoginButton />
      </div>
    </div>
  );
};

export default LoginPage;
