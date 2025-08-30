import { usePreferences } from '../../../contexts/preferences';
import { Checkbox, CustomText } from '../../shared';

function RecommendationType({ onRecommendationTypeChange }) {
  const { t } = usePreferences();

  return (
    <div className="flex flex-col items-center mb-4">
      <CustomText type="h3" className="mb-2">
        {t('recommendationType')}
      </CustomText>
      <div className="flex items-center">
        <Checkbox
          type="radio"
          name="recommendationType"
          value="SingleProduct"
          onChange={() => onRecommendationTypeChange('SingleProduct')}
          className="mr-2"
        />
        <label htmlFor="SingleProduct" className="mr-4">
          {t('singleProduct')}
        </label>
        <Checkbox
          type="radio"
          name="recommendationType"
          value="MultipleProducts"
          onChange={() => onRecommendationTypeChange('MultipleProducts')}
          className="mr-2"
        />
        <label htmlFor="MultipleProducts">{t('multipleProducts')}</label>
      </div>
    </div>
  );
}

export default RecommendationType;
