// Preferences.js

import { useState } from 'react';
import { usePreferences } from '../../../contexts/preferences';
import { Checkbox, CustomText } from '../../shared';

function Preferences({
  preferences,
  selectedPreferences = [],
  onPreferenceChange,
}) {
  const { t } = usePreferences();

  const [currentPreferences, setCurrentPreferences] =
    useState(selectedPreferences);

  const handlePreferenceChange = (preference) => {
    const updatedPreferences = currentPreferences.includes(preference)
      ? currentPreferences.filter((pref) => pref !== preference)
      : [...currentPreferences, preference];

    setCurrentPreferences(updatedPreferences);
    onPreferenceChange(updatedPreferences);
  };

  return (
    <div className="mb-4">
      <CustomText type="h3" className="mb-2">
        {t('preferences')}
      </CustomText>
      {preferences.length > 0 ? (
        <ul>
          {preferences.map((preference, index) => (
            <li key={index} className="mb-2">
              <Checkbox
                value={preference}
                checked={currentPreferences.includes(preference)}
                onChange={() => handlePreferenceChange(preference)}
                className="w-5 h-5"
              >
                {preference}
              </Checkbox>
            </li>
          ))}
        </ul>
      ) : (
        <CustomText className="mb-2">{t('noPreferencesFound')}</CustomText>
      )}
    </div>
  );
}

export default Preferences;
