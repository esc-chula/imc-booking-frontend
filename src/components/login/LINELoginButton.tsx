import LINELogo from '#/icons/LINE_logo.svg';
import Image from 'next/image';

const LINELoginButton = () => {
  return (
    <button
      type='button'
      className='flex w-full items-center rounded-md bg-[rgb(6,199,85)] text-white hover:brightness-90 active:brightness-[.7]'
    >
      <div className='aspect-square h-14 border-r border-r-[#000]/[.08]'>
        <Image src={LINELogo} alt='line logo' />
      </div>
      <span className='flex-1 py-3 text-lg font-semibold'>
        Log in with LINE
      </span>
    </button>
  );
};

export default LINELoginButton;
