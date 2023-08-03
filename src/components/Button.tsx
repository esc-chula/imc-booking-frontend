import clsx from 'clsx';

type ButtonProps = {
  type: 'primary' | 'secondary';
  size: 'fit' | 'full';
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button = ({ type, size, children, onClick, className }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'rounded-lg text-xl font-bold',
        {
          'bg-red px-5 py-2 text-white': type === 'primary',
          'bg-gray px-5 py-2 text-white': type === 'secondary',
        },
        {
          'w-full': size === 'full',
          'w-fit px-2': size === 'fit',
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
