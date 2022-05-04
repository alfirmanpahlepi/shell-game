export default function InputRadioLabel({ color, level, children, ...etc }) {
  return (
    <div className="space-x-2 flex items-center">
      <input
        className={`${color} lg:h-6 lg:w-6 focus:ring-0`}
        type="radio"
        name="level"
        id={level}
        {...etc}
      />
      <label className="lg:text-xl" htmlFor={level}>
        {children}
      </label>
    </div>
  );
}
