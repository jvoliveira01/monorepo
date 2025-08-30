import { CustomText } from '..';
import { MdCheckCircleOutline, MdErrorOutline } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';

function Toast({ toasts, handleCloseToast }) {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full sm:max-w-96 sm:mx-0 px-4">
      {toasts.map((toast) => {
        const Icon =
          toast.type === 'error' ? MdErrorOutline : MdCheckCircleOutline;

        const dataTestId =
          toast.type === 'error' ? 'toast-error-icon' : 'toast-success-icon';

        return (
          <div
            key={toast.id}
            className={`flex flex-row items-center  gap-x-4 px-3 py-4 rounded-lg shadow ${
              toast.type === 'error' ? 'bg-toast-error' : 'bg-toast-success'
            }`}
          >
            <Icon className="text-xl text-white" data-testid={dataTestId} />
            <CustomText className="text-white flex-1">
              {toast.message}
            </CustomText>
            <IoMdClose
              onClick={() => handleCloseToast(toast.id)}
              className="text-white text-2xl cursor-pointer"
              data-testid="toast-close-icon"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Toast;
