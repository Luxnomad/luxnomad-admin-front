import { Formik } from 'formik';

import { adminSchema } from '@@constants/schema';
import AdminFormContent from '@@pages/Admin/parts/AdminFormContent';
import { UpsertAdminForm } from '@@pages/Admin/types';
import { FormProps } from '@@types/form';

function AdminForm({ formType, ...props }: FormProps<UpsertAdminForm>) {
  return (
    <Formik {...props} validationSchema={adminSchema}>
      <AdminFormContent formType={formType} />
    </Formik>
  );
}

export default AdminForm;
