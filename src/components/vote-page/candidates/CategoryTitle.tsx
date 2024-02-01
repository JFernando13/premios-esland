export const CategoryTitle = ({
  children,
  isChanging,
}: {
  children?: string;
  isChanging?: boolean;
}) => {
  return (
    <h1 class='relative tracking-[1px] font-tomaso text-xl sm:text-3xl text-center leading-snug flex justify-center items-center text-white'>
      <svg
        class={`h-60 w-24 fill-current ${isChanging
          ? 'translate-x-[6.5rem] sm:translate-x-[8.5rem]'
          : 'translate-x-9 sm:translate-x-0'
          } transition duration-500`}
        viewBox='0 0 90.35 240.43'
      >
        <path
          d='m142.7 234.66-52.79 7.45L142.7 39.4 52.35 279.83z'
          transform='translate(-52.35 -39.4)'
        />
      </svg>

      <div class='flex justify-center items-center flex-col gap-y-4 w-72 px-10'>
        <svg
          class={`absolute ${isChanging
            ? 'scale-[1.2] sm:scale-[1.7] -translate-y-0'
            : 'scale-100 -translate-y-28'
            } h-14 fill-current transition duration-500`}
          viewBox='0 0 16.04 62.55'
        >
          <path
            d='m300 38.16-8.02 46.7 8.02 15.85 8.02-15.85z'
            transform='translate(-291.98 -38.16)'
          />
        </svg>
        <span
          class={`${isChanging
            ? 'invisible opacity-0'
            : 'visible opacity-100'
            } delay-75 transition duration-300`}
        >
          {children}
        </span>
      </div>

      <svg
        class={`h-60 w-24 fill-current ${isChanging
          ? '-translate-x-[6.5rem] sm:-translate-x-[8.5rem]'
          : '-translate-x-9 sm:translate-x-0'
          } transition duration-500`}
        viewBox='0 0 90.35 240.43'
      >
        <path
          d='m457.3 234.66 52.79 7.45L457.3 39.4l90.35 240.43z'
          transform='translate(-457.3 -39.4)'
        />
      </svg>
    </h1>
  );
};
