import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type CustomTextFieldProps = {
  id: string;
  label?: string;
  placeholder?: string;
};

type TextFieldProps = CustomTextFieldProps &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const TextField = ({ id, label, placeholder, ...props }: TextFieldProps) => {
  return (
    <div className='w-full'>
      {label ? (
        <label className='mb-2 block font-medium text-white' htmlFor={id}>
          {label}
        </label>
      ) : null}
      <input
        className='w-full rounded-2xl border border-white/30 bg-darkgray py-4 pl-[1.125rem] pr-6 text-white placeholder:text-white placeholder:opacity-30'
        type='text'
        name={id}
        id={id}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default TextField;
