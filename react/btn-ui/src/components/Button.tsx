import { twMerge } from 'tailwind-merge';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

// export default function Button({ children, type, className }: ButtonProps) {
//   return (
//     <>
//       <button
//         type={type}
//         className={twMerge(
//           'w-[200px] h-[100px] text-white cursor-pointer text-sm rounded-lg',
//           className
//         )}
//       >
//         {children}
//       </button>
//     </>
//   );
// }

export default function Button(props: ButtonProps) {
  const { children, className, ...rest } = props;
  return (
    <>
      <button
        className={twMerge(
          'w-[200px] h-[100px] text-white cursor-pointer text-sm rounded-lg',
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
