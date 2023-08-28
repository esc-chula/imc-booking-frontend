import TextField from '@/components/TextField';
import { FormEvent } from 'react';
import { useLoadingCallback } from 'react-loading-hook';
import Image from 'next/image';
import LgLogo from '#/icons/lg-logo.svg';
import Button from '@/components/Button';

function SignUpPage() {
  const [handleSignUp, loading] = useLoadingCallback(async (e: FormEvent) => {
    e.preventDefault();
  });

  return (
    <>
      <header className='grid place-items-center gap-10'>
        <Image src={LgLogo} alt='IMC logo' className='mt-2 w-44' />
        <h1 className='text-center text-4xl font-bold uppercase text-white'>
          Sign Up
        </h1>
      </header>
      <form
        className='!mt-9 flex flex-col items-center gap-5'
        onSubmit={handleSignUp}
      >
        <TextField
          id='studentId'
          type='number'
          label='Student ID'
          placeholder='64xxxxx21'
        />
        <TextField id='nickname' label='Nickname' placeholder='อิอิ' />
        <TextField id='firstName' label='First Name' placeholder='เรียนเด่น' />
        <TextField id='lastName' label='Last Name' placeholder='เล่นดี' />
        <Button
          className='uppercase'
          type='submit'
          variant='primary'
          size='fit'
        >
          Sign Up
        </Button>
      </form>
    </>
  );
}

export default SignUpPage;
