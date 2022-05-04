export const Button = ({ disabled, children, ...etc }) => {
  return (
    <button
      {...etc}
      disabled={disabled}
      className={` ${
        disabled && "cursor-not-allowed"
      }  focus:outline-none tracking-widest py-1 px-4 lg:py-2 lg:px-7 lg:rounded-3xl lg:text-2xl font-bold rounded-2xl shadow hover:shadow-lg duration-150 ease-linear transition-all bg-gray-50 hover:bg-gray-200 text-gray-600 hover:text-gray-700`}
    >
      {children}
    </button>
  );
};
