import { useState } from 'react';
import { usePreferences } from '../../contexts/preferences';
import { CustomButton, CustomText, Spinner } from '../shared';
import RecommendationDetails from './RecommendationDetails';

function RecommendationList({
  recommendations,
  handleGoBack,
  getRecommendationById,
}) {
  const { t } = usePreferences();
  const [selectedRecommendation, setSelectedRecommendation] = useState(null);
  const [isLoadingId, setIsLoadingId] = useState('');

  async function handleSelectRecommendation(id) {
    if (isLoadingId !== '') return;

    try {
      setIsLoadingId(id);
      const recommendation = await getRecommendationById(id);
      setSelectedRecommendation(recommendation);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingId('');
    }
  }

  return (
    <div className="flex flex-col items-center">
      <CustomText type="h3" className="mb-8">
        {t('recommendationsList')}
      </CustomText>

      <ul className="w-full flex flex-col items-center">
        {recommendations.map((recommendation, index) => (
          <li
            key={index}
            className="mb-2 flex bg-secondary-300 py-4 min-w-72 sm:min-w-80 rounded-lg justify-center cursor-pointer scale-95 hover:scale-100 hover:border-primary-900 border-[1px] transition-all"
            onClick={() => handleSelectRecommendation(recommendation.id)}
          >
            <div className="flex flex-row gap-x-4 items-center justify-start">
              {isLoadingId === recommendation.id ? (
                <Spinner className="border-primary-900" />
              ) : (
                <CustomText>{recommendation.name}</CustomText>
              )}
            </div>
          </li>
        ))}
      </ul>
      <CustomButton
        className="mt-8"
        text={t('goBack')}
        onClick={handleGoBack}
      />
      {selectedRecommendation && (
        <RecommendationDetails
          recommendation={selectedRecommendation}
          handleClose={() => setSelectedRecommendation(null)}
        />
      )}
    </div>
  );
}

export default RecommendationList;
