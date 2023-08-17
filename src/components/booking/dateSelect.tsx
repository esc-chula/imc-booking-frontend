import React from 'react';
import DatePicker from 'react-datepicker';
import { useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';

type DateSelectProps = {
  selectedDate: Date | null;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
  unavailableDates: Date[];
};

const DateSelect: React.FC<DateSelectProps> = ({
  selectedDate,
  setSelectedDate,
  unavailableDates,
}) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='mb-4 self-start text-2xl font-extrabold text-white'>
        จองห้องซ้อม
      </div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
          console.log(date);
        }}
        excludeDates={unavailableDates}
        minDate={new Date()}
        inline
        className='w-full'
      />
    </div>
  );
};

export default DateSelect;
