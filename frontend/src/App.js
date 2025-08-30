import { PreferencesProvider } from './contexts/preferences';
import { ToastProvider } from './contexts/toast';
import Home from './pages/Home';

function App() {
  return (
    <PreferencesProvider>
      <ToastProvider>
        <Home />
      </ToastProvider>
    </PreferencesProvider>
  );
}

export default App;
