import { Formik } from 'formik';

import { popupSchema } from '@@constants/schema';
import PopupFormContent from '@@pages/PopupManagement/parts/PopupFormContent';
import { UpsertPopupDTO } from '@@stores/popupManagement/types';
import { FormProps } from '@@types/form';

function PopupForm({ formType, initialValues, ...props }: FormProps<UpsertPopupDTO>) {
  return (
    <Formik {...props} initialValues={initialValues} enableReinitialize validationSchema={popupSchema}>
      <PopupFormContent formType={formType} />
    </Formik>
  );
}

export default PopupForm;
