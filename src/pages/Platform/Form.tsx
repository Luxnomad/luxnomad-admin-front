import { Formik } from 'formik';

import { platformSchema } from '@@constants/schema';
import PlatformFormContent from '@@pages/Platform/parts/PlatformFormContent';
import { PlatformCreateForm, PlatformEditForm } from '@@pages/Platform/types';
import { FormProps } from '@@types/form';

function PlatformForm<Data extends object = PlatformCreateForm | PlatformEditForm>({ formType, ...props }: FormProps<Data>) {
  return (
    <Formik {...props} validationSchema={platformSchema}>
      <PlatformFormContent formType={formType} />
    </Formik>
  );
}

export default PlatformForm;
