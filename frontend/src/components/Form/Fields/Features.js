import { useState } from 'react';
import { usePreferences } from '../../../contexts/preferences';
import { Checkbox, CustomText } from '../../shared';

function Features({ features, selectedFeatures = [], onFeatureChange }) {
  const { t } = usePreferences();
  const [currentFeatures, setCurrentFeatures] = useState(selectedFeatures);

  const handleFeatureChange = (feature) => {
    const updatedFeatures = currentFeatures.includes(feature)
      ? currentFeatures.filter((pref) => pref !== feature)
      : [...currentFeatures, feature];

    setCurrentFeatures(updatedFeatures);
    onFeatureChange(updatedFeatures);
  };

  return (
    <div className="mb-4">
      <CustomText type="h3" className="mb-2">
        {t('features')}
      </CustomText>
      {features.length > 0 ? (
        <ul>
          {features.map((feature, index) => (
            <li key={index} className="mb-2">
              <Checkbox
                value={feature}
                checked={currentFeatures.includes(feature)}
                onChange={() => handleFeatureChange(feature)}
                className="w-5 h-5"
              >
                {feature}
              </Checkbox>
            </li>
          ))}
        </ul>
      ) : (
        <CustomText className="mb-2">{t('noFeaturesFound')}</CustomText>
      )}
    </div>
  );
}

export default Features;
