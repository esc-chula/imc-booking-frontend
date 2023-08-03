import BookOpen from '#/icons/book-open.svg';
import Image from 'next/image';

const Booking = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='mt-5 text-3xl font-bold text-white'>ระบบจองห้องซ้อม</h1>

      <Image src={BookOpen} alt='Open book' className='mt-2 w-44' />

      <button className='mt-2 rounded-lg bg-red px-5 py-2 text-xl font-bold text-white'>
        จองห้องซ้อม
      </button>
    </div>
  );
};

export default Booking;
