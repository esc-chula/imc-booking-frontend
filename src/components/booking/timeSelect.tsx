import React, { useState } from 'react';

const timeSlots = [
  '08:00 - 08:30',
  '08:30 - 09:00',
  '09:00 - 09:30',
  '09:30 - 10:00',
  '10:00 - 10:30',
  '10:30 - 11:00',
  '11:00 - 11:30',
  '11:30 - 12:00',
  '12:00 - 12:30',
  '12:30 - 13:00',
  '13:00 - 13:30',
  '13:30 - 14:00',
  '14:00 - 14:30',
  '14:30 - 15:00',
  '15:00 - 15:30',
  '15:30 - 16:00',
  '16:00 - 16:30',
  '16:30 - 17:00',
  '17:00 - 17:30',
  '17:30 - 18:00',
  '18:00 - 18:30',
  '18:30 - 19:00',
  '19:00 - 19:30',
  '19:30 - 20:00',
];

type TimeSelectProps = {
  timeSelected: Array<boolean>;
  setTimeSelected: React.Dispatch<React.SetStateAction<Array<boolean>>>;
  timeAvailability: Array<boolean>;
};

const TimeSelect: React.FC<TimeSelectProps> = ({
  timeSelected,
  setTimeSelected,
  timeAvailability,
}) => {
  return (
    <div className='my-4 flex flex-col items-center'>
      <div className='my-4 text-xl font-extrabold text-white'>เวลาที่จอง</div>
      <div className=' w-10/12'>
        {timeSlots.map((timeSlot, i) => (
          <button
            key={i}
            type='button'
            className={`my-3 flex w-full flex-row items-center justify-start rounded-md border-[1px]    py-2 pl-4 font-extrabold ${
              timeSelected[i]
                ? 'border-white bg-gray'
                : 'border-gray bg-darkgray'
            } ${timeAvailability[i] ? 'text-white' : 'text-gray'}`}
            onClick={() => {
              const newSelection = [...timeSelected];
              newSelection[i] = !newSelection[i];
              setTimeSelected(newSelection);
            }}
            disabled={!timeAvailability[i]}
          >
            {timeSlot}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSelect;
