import { Formik } from 'formik';

import { postSchema } from '@@constants/schema';
import PostFormContent from '@@pages/PostManagement/parts/PostFormContent';
import { UpsertPostDTO } from '@@stores/postManagement/types';
import { FormProps } from '@@types/form';

function PostForm({ formType, initialValues, ...props }: FormProps<UpsertPostDTO>) {
  return (
    <Formik {...props} initialValues={initialValues} enableReinitialize validationSchema={postSchema}>
      <PostFormContent formType={formType} />
    </Formik>
  );
}

export default PostForm;
