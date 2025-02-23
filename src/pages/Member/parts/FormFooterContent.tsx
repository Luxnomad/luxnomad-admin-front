import Button from '@@components/Button';
import ButtonContainer from '@@components/ButtonContainer';
import { FormType } from '@@types/form';

function FormFooterContent({ formType }: { formType: FormType }) {
  return (
    <ButtonContainer>
      <Button type='submit'>{formType === 'create' ? '생성' : '수정'}</Button>
    </ButtonContainer>
  );
}

export default FormFooterContent;
