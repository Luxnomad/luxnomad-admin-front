import { Formik } from 'formik';

import { memberSchema } from '@@constants/schema';
import MemberCreateFormContent from '@@pages/Member/parts/MemberCreateFormContent';
import MemberEditFormContent from '@@pages/Member/parts/MemberEditFormContent';
import { CreateMemberFormProps, EditMemberFormProps } from '@@pages/Member/types';

function MemberForm({ formType, ...props }: CreateMemberFormProps | EditMemberFormProps) {
  return formType === 'create' ? (
    <Formik {...(props as CreateMemberFormProps)} validationSchema={memberSchema}>
      <MemberCreateFormContent />
    </Formik>
  ) : (
    <Formik {...(props as EditMemberFormProps)} validationSchema={memberSchema}>
      <MemberEditFormContent />
    </Formik>
  );
}

export default MemberForm;
