import { Form, useFormikContext } from 'formik';

import FormGroup from '@@components/FormGroup';
import PageTemplate from '@@components/PageTemplate';
import RadioGroup from '@@components/RadioGroup';
import TextFieldFormGroup from '@@components/TextFieldFormGroup';
import FormFooterContent from '@@pages/Platform/parts/FormFooterContent';
import { PlatformCreateForm, PlatformEditForm } from '@@pages/Platform/types';
import { ALL_PLATFORM_STATUS, PLATFORM_STATUS_STRING } from '@@stores/platform/constants';
import { FormType } from '@@types/form';

function PlatformFormContent({ formType }: { formType: FormType }) {
  const { errors, getFieldProps, setFieldValue, handleSubmit, isValid } = useFormikContext<PlatformCreateForm | PlatformEditForm>();

  console.log(errors);

  return (
    <Form onSubmit={handleSubmit}>
      <PageTemplate
        headerContent={formType === 'create' ? '플랫폼 생성' : '플랫폼 수정'}
        footerContent={<FormFooterContent formType={formType} isValid={isValid} />}
      >
        <TextFieldFormGroup
          label='플랫폼 ID'
          textFieldProps={{
            ...getFieldProps('id'),
            placeholder: '플랫폼 아이디를 입력해주세요.',
            disabled: formType === 'update',
          }}
          errorMessage={errors.id}
        />
        <TextFieldFormGroup
          label='플랫폼명'
          textFieldProps={{
            ...getFieldProps('name'),
            placeholder: '플랫폼명을 입력해주세요.',
          }}
          errorMessage={errors.name}
        />
        <TextFieldFormGroup
          label='대표자명'
          textFieldProps={{
            ...getFieldProps('ownerName'),
            placeholder: '대표자명을 입력해주세요.',
          }}
          errorMessage={errors.ownerName}
        />
        <TextFieldFormGroup
          label='회사명'
          textFieldProps={{
            ...getFieldProps('companyName'),
            placeholder: '회사명을 입력해주세요.',
          }}
          errorMessage={errors.companyName}
        />
        <TextFieldFormGroup
          label='대표 전화번호'
          textFieldProps={{
            ...getFieldProps('companyTel'),
            type: 'tel',
            placeholder: '대표 전화번호를 입력해주세요',
          }}
          errorMessage={errors.companyTel}
        />
        <TextFieldFormGroup
          label='사업자 등록번호'
          textFieldProps={{
            ...getFieldProps('registrationNumber'),
            placeholder: '사업자 등록번호를 입력해주세요.',
          }}
          errorMessage={errors.registrationNumber}
        />
        <TextFieldFormGroup
          label='법인 등록번호'
          textFieldProps={{
            ...getFieldProps('corporationRegistrationNumber'),
            placeholder: '법인 등록번호를 입력해주세요.',
          }}
          errorMessage={errors.corporationRegistrationNumber}
        />
        <TextFieldFormGroup
          label='회사 주소'
          textFieldProps={{
            ...getFieldProps('companyAddress'),
            placeholder: '회사 주소를 입력해주세요.',
          }}
          errorMessage={errors.companyAddress}
        />
        <TextFieldFormGroup
          label='회사 대표 이메일'
          textFieldProps={{
            ...getFieldProps('companyEmail'),
            placeholder: '회사 대표 이메일으르 입력해주세요.',
          }}
          errorMessage={errors.companyEmail}
        />
        {formType === 'update' && (
          <FormGroup label='플랫폼 상태'>
            <RadioGroup
              options={ALL_PLATFORM_STATUS.map((status) => ({
                value: status,
                label: PLATFORM_STATUS_STRING[status],
              }))}
              {...getFieldProps('status')}
              onChange={(e) => {
                setFieldValue('status', e.target.value);
              }}
            />
          </FormGroup>
        )}
      </PageTemplate>
    </Form>
  );
}

export default PlatformFormContent;
