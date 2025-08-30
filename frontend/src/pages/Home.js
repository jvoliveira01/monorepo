import Form from '../components/Form/Form';
import RecommendationList from '../components/RecommendationList/RecommendationList';
import { usePreferences } from '../contexts/preferences';
import useProducts from '../hooks/useProducts';
import useRecommendations from '../hooks/useRecommendations';
import useForm from '../hooks/useForm';
import { CustomText } from '../components/shared';
import { FaRegCheckCircle } from 'react-icons/fa';

function Home() {
  const { t } = usePreferences();
  const { preferences, features, products } = useProducts();
  const {
    isLoading,
    recommendations,
    setRecommendations,
    getRecommendations,
    getRecommendationById,
  } = useRecommendations(products);
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  function handleGoBack() {
    setRecommendations([]);
  }

  const hasRecommendations = recommendations.length > 0 && !isLoading;

  return (
    <div className="bg-background sm:bg-cover bg-center p-6 min-h-screen flex flex-col justify-center items-center">
      <div className="flex bg-primary-900 items-center my-16 mx-4 px-8 py-5 rounded-lg shadow-md gap-4">
        <FaRegCheckCircle className="w-16 h-16 text-white" />
        <CustomText type="h1" className="text-center text-white">
          {t('productName')}
        </CustomText>
      </div>
      <div className="bg-secondary-100 p-8 rounded-lg shadow-md w-full sm:w-3/4 gap-8 overflow-hidden max-w-6xl">
        <CustomText className="text-center">{t('welcomeMessage')}</CustomText>
        <div
          className={`transition-transform duration-500 transform ${
            hasRecommendations
              ? 'translate-y-full h-0 opacity-0 pointer-events-none'
              : 'translate-y-0 opacity-100'
          }`}
        >
          <Form
            formData={formData}
            handleChange={handleChange}
            preferences={preferences}
            features={features}
            isLoading={isLoading}
            getRecommendations={getRecommendations}
          />
        </div>
        <div
          className={`transition-transform duration-500 transform ${
            hasRecommendations
              ? 'translate-y-0 opacity-100'
              : '-translate-y-full opacity-0 h-0 pointer-events-none'
          }`}
        >
          <RecommendationList
            recommendations={recommendations}
            handleGoBack={handleGoBack}
            getRecommendationById={getRecommendationById}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
