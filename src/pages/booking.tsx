import DefaultLayout from '@/layouts/DefaultLayout';
import Navbar from '@/components/Navbar';
import React from 'react';
import TimeSelect from '@/components/booking/timeSelect';
import Detail from '@/components/booking/detail';
import { useState } from 'react';
import DateSelect from '@/components/booking/dateSelect';
import Button from '@/components/Button';
import ConfirmModal from '@/components/booking/confirmModal';

const Booking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timeSelected, setTimeSelected] = useState<Array<boolean>>(
    Array(24).fill(false)
  );
  const [eventName, setEventName] = useState<string>('');
  const [band, setBand] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [confirmModal, setConfirmModal] = useState<boolean>(false);

  let unavailableDates = [new Date('2023-08-16'), new Date('2023-08-22')];

  let timeAvailability = Array(24).fill(true);

  let eventList = ['event1', 'event2', 'event3', 'event4', 'event5'];

  const mockAvailableTime = {
    '08:00-08:30': true,

    '08:30-09:00': false,

    '09:00-09:30': false,
  };

  return (
    <DefaultLayout>
      <Navbar />
      <form action='' className='w-full'>
        <DateSelect
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          unavailableDates={unavailableDates}
        />
        <TimeSelect
          timeSelected={timeSelected}
          setTimeSelected={setTimeSelected}
          timeAvailability={timeAvailability}
        />
        <Detail
          eventList={eventList}
          eventName={eventName}
          setEventName={setEventName}
          band={band}
          setBand={setBand}
          phone={phone}
          setPhone={setPhone}
        />
        <div className='mb-5 mt-8 flex flex-col items-center justify-center'>
          <Button
            type='primary'
            size='fit'
            onClick={() => setConfirmModal(true)}
          >
            Confirm
          </Button>
        </div>
        {confirmModal && <ConfirmModal setConfirmModal={setConfirmModal} />}
      </form>
    </DefaultLayout>
  );
};

export default Booking;
