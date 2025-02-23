import { useFormikContext } from 'formik';

import Button from '@@components/Button';
import ButtonContainer from '@@components/ButtonContainer';
import { UpsertAdminForm } from '@@pages/Admin/types';
import { FormType } from '@@types/form';

function FormFooterContent({ formType }: { formType: FormType }) {
  const { isValid } = useFormikContext<UpsertAdminForm>();

  return (
    <ButtonContainer>
      <Button type='submit' disabled={!isValid}>
        {formType === 'create' ? '생성' : '수정'}
      </Button>
    </ButtonContainer>
  );
}

export default FormFooterContent;
