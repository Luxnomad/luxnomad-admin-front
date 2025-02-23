import Button from '@@components/Button';
import Flex from '@@components/Flex';
import { FormType } from '@@types/form';

function FormFooterContent({ formType, isValid }: { formType: FormType; isValid: boolean }) {
  return (
    <Flex.Horizontal>
      <Button type='submit' disabled={!isValid}>
        {formType === 'create' ? '생성' : '수정'}
      </Button>
    </Flex.Horizontal>
  );
}

export default FormFooterContent;
