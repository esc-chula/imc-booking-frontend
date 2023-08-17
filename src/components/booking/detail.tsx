import React from 'react';

type detailProps = {
  eventList: Array<string>;
  eventName: string;
  setEventName: React.Dispatch<React.SetStateAction<string>>;
  band: string;
  setBand: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
};

const Detail: React.FC<detailProps> = ({
  eventList,
  eventName,
  setEventName,
  band,
  setBand,
  phone,
  setPhone,
}) => {
  return (
    <div className='flex w-full flex-col items-center'>
      <div className='flex w-11/12 flex-col items-start'>
        <label htmlFor='event' className='text-md mb-2 font-medium text-white'>
          Event
        </label>
        <select
          name='event'
          id='event'
          className={`w-full rounded-md border-[1px] border-gray bg-darkgray px-4 py-2 font-medium  ${
            eventName ? 'text-white' : 'text-gray'
          }`}
          required
          value={eventName}
          onChange={(e) => {
            setEventName(e.target.value);
          }}
        >
          <option
            value=''
            selected
            disabled
            hidden
            className='disabled:text-gray'
          >
            ลานกิจแบ
          </option>
          {eventList.map((e, i) => (
            <option key={i} value={e}>
              {e}
            </option>
          ))}
        </select>
        <label
          htmlFor='band'
          className='text-md mb-2 mt-4 font-medium text-white'
        >
          Band Name
        </label>
        <input
          name='band'
          type='text'
          placeholder='วงกลม'
          className='w-full rounded-md border-[1px] border-gray bg-darkgray px-4 py-2 font-medium text-white '
          value={band}
          onChange={(e) => setBand(e.target.value)}
          required
        />
        <label
          htmlFor='phone'
          className='text-md mb-2 mt-4 font-medium text-white'
        >
          เบอร์ติดต่อผู้จอง
        </label>
        <input
          name='phone'
          type='tel'
          placeholder='0811111111'
          className='w-full rounded-md border-[1px] border-gray bg-darkgray px-4 py-2 font-medium text-white '
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
    </div>
  );
};

export default Detail;
