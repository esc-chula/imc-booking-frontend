import React from 'react';
import Button from '../Button';

const ConfirmModal = () => {
  const [rules, setRules] = React.useState<boolean>(false);

  return (
    <div className='fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-black/20 backdrop-blur-lg'>
      <div className='flex w-10/12 flex-col items-center justify-between rounded-xl border-[1px] border-gray bg-darkgray px-12 pb-6 pt-9 font-bold text-white'>
        <div>icon</div>
        <div className='my-3 text-3xl'>ยืนยันการจอง</div>
        <div className='font-medium'>วง {}</div>
        <div className='font-medium'>วันที่ {}</div>
        <div className='font-medium'>เวลา {}</div>
        <div className='my-3 text-xl'>จองห้องแล้วห้ามบิดนิ</div>
        <Button type='secondary' size='fit' className='mb-3 w-full'>
          แก้ไขข้อมูล
        </Button>
        <Button type='primary' size='fit' className='mb-5 w-full'>
          รับทราบ
        </Button>
        <button
          type='button'
          className='mt-3 font-medium underline'
          onClick={() => setRules(!rules)}
        >
          กฎการใช้ห้องซ้อม
        </button>
        {rules && (
          <div className='my-3 font-medium'>
            1. สามารถจองได้เฉพาะวงที่ผ่านเข้ารอบ Online Audition
            รายการเเข่งวงเท่านั้น ✨วงไหนสมัครมา ติดหมดทุกวง✨ <br /> 2. 😡
            ถ้าหาก slot การจองไหนที่ไม่มีใส่เบอร์โทรติดต่อเอาไว้
            จะไม่นับว่าเป็นการจอง 😡 <br /> 3. หากจองแล้ว ‼️ห้าม‼️
            ยกเลิกการจองทุกกรณี ฉะนั้นคิดดีๆมาให้ตรงเวลา
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmModal;
