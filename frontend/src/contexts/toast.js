import { createContext, useCallback, useContext, useState } from 'react';
import { Toast } from '../components/shared';

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'success') => {
    const id = Date.now();

    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  function handleCloseToast(id) {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }

  const providerValue = { addToast };

  return (
    <ToastContext.Provider value={providerValue}>
      {children}
      <Toast toasts={toasts} handleCloseToast={handleCloseToast} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
