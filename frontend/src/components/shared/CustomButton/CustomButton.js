import { CustomText, Spinner } from '..';

function CustomButton({ text, isLoading, className, onClick }) {
  return (
    <button
      type="submit"
      className={`
    flex justify-center py-2 px-3 rounded-lg transition-colors
    ${
      isLoading
        ? 'bg-primary-900 scale-100 cursor-not-allowed'
        : 'bg-primary-500 hover:bg-primary-900 hover:scale-100 scale-95'
    }
    ${className}
  `}
      onClick={onClick}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <CustomText className="text-secondary-100 font-bold text-white">
          {text}
        </CustomText>
      )}
    </button>
  );
}

export default CustomButton;
