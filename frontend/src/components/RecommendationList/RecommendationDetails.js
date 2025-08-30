import { createPortal } from 'react-dom';
import { IoMdClose } from 'react-icons/io';
import { CustomText } from '../shared';

function RecommendationDetails({ recommendation, handleClose }) {
  return createPortal(
    <div className="fixed inset-0 overflow-hidden flex items-center justify-center w-full h-full bg-secondary-translucent z-40">
      <div className="bg-secondary-100 p-6 m-4 rounded-lg max-w-lg w-full gap-8">
        <div className="flex flex-row">
          <div className="flex-1">
            <CustomText type="h3">{recommendation.name}</CustomText>
            <CustomText type="caption">{recommendation.category}</CustomText>
          </div>
          <IoMdClose
            onClick={handleClose}
            className="text-primary-900 text-2xl cursor-pointer"
          />
        </div>
        <CustomText className="mt-8 mb-4 font-bold">Ideal para</CustomText>
        {recommendation.preferences.map((preference, index) => (
          <CustomText className="mb-1 pl-2" key={index}>
            {preference}
          </CustomText>
        ))}
        <CustomText className="mt-8 mb-4 font-bold">Ferramentas</CustomText>
        {recommendation.features.map((preference, index) => (
          <CustomText className="mb-1 pl-2" key={index}>
            {preference}
          </CustomText>
        ))}
      </div>
    </div>,
    document.body
  );
}

export default RecommendationDetails;
