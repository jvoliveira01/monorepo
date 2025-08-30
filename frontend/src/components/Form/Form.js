// Form.js

import { Preferences, Features, RecommendationType } from './Fields';
import { usePreferences } from '../../contexts/preferences';
import { CustomButton } from '../shared';

function Form({
  formData,
  handleChange,
  preferences,
  features,
  isLoading,
  getRecommendations,
}) {
  const { t } = usePreferences();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getRecommendations(formData);
  };

  return (
    <form
      className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 mt-8"
      onSubmit={handleSubmit}
    >
      <Preferences
        preferences={preferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />
      <Features
        features={features}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />
      <div className="flex flex-col sm:col-span-2 items-center">
        <RecommendationType
          onRecommendationTypeChange={(selected) =>
            handleChange('selectedRecommendationType', selected)
          }
        />
        <CustomButton
          text={t('getRecommendation')}
          isLoading={isLoading}
          className="min-w-52 mt-8"
        />
      </div>
    </form>
  );
}

export default Form;
