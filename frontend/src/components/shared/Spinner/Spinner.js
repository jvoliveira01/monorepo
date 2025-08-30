function Spinner({ className }) {
  return (
    <div
      data-testid="spinner"
      className={`w-5 h-5 border-4 border-t-transparent border-white rounded-full animate-spin ${className}`}
    />
  );
}

export default Spinner;
