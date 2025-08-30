function Checkbox({ children, className, ...props }) {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        className={`h-5 w-5 accent-primary-500 cursor-pointer ${className}`}
        {...props}
      />
      <span className="flex-1 ml-2">{children}</span>
    </label>
  );
}

export default Checkbox;
