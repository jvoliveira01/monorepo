// useRecommendations.js

import { useState } from 'react';
import recommendationService from '../services/recommendation.service';
import { useToast } from '../contexts/toast';
import { usePreferences } from '../contexts/preferences';

function useRecommendations(products) {
  const { addToast } = useToast();
  const { t } = usePreferences();
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getRecommendations = async (formData) => {
    if (isLoading) return;

    if (
      !formData.selectedPreferences.length ||
      !formData.selectedFeatures.length ||
      !formData.selectedRecommendationType
    ) {
      addToast(t('fillAllFields'), 'error');
      return;
    }

    try {
      setIsLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      const recomendationsList = recommendationService.getRecommendations(
        formData,
        products
      );

      setRecommendations(recomendationsList);

      const toastType = recomendationsList.length === 0 ? 'error' : 'success';

      addToast(
        t('successMessage', { count: recomendationsList.length }),
        toastType
      );
    } catch (error) {
      addToast(t('errorFetchingRecommendations'), 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const getRecommendationById = async (id) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const recommendation = recommendationService.getRecommendationById(
        id,
        products
      );

      return recommendation;
    } catch (error) {
      const errorMessage = `${t('errorGettingProduct')}: ${error.message}`;
      addToast(errorMessage, 'error');
    }
  };

  return {
    isLoading,
    recommendations,
    setRecommendations,
    getRecommendations,
    getRecommendationById,
  };
}

export default useRecommendations;
