import { Form, useFormikContext } from 'formik';

import DropdownFormGroup from '@@components/DropdownFormGroup';
import FormGroup from '@@components/FormGroup';
import PageTemplate from '@@components/PageTemplate';
import Suggestion from '@@components/Suggestion';
import TextFieldFormGroup from '@@components/TextFieldFormGroup';
import AdminPermissionsInput from '@@pages/Admin/parts/AdminPermissionsInput';
import FormFooterContent from '@@pages/Admin/parts/FormFooterContent';
import { UpsertAdminForm } from '@@pages/Admin/types';
import { ADMIN_MEMBER_TYPE_OPTIONS } from '@@stores/auth/constants';
import { Platform } from '@@stores/platform/types';
import { FormType } from '@@types/form';
import { searchPlatform } from '@@utils/searchRequests';

function AdminFormContent({ formType }: { formType: FormType }) {
  const { getFieldProps, setFieldValue, handleSubmit, errors } = useFormikContext<UpsertAdminForm>();

  const handleChangePlatform = (platform: Platform) => {
    setFieldValue('platformId', platform.platformId);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <PageTemplate headerContent={`Admin ${formType === 'create' ? '생성' : '수정'}`} footerContent={<FormFooterContent formType={formType} />}>
        <TextFieldFormGroup
          label='Email'
          textFieldProps={{
            ...getFieldProps('email'),
            placeholder: '이메일을 입력해주세요.',
          }}
          errorMessage={errors.email}
        />
        <TextFieldFormGroup
          label='이름'
          textFieldProps={{
            ...getFieldProps('name'),
            placeholder: '이름을 입력해주세요.',
          }}
          errorMessage={errors.name}
        />
        <TextFieldFormGroup
          label='비밀번호'
          textFieldProps={{
            ...getFieldProps('password'),
            placeholder: '비밀번호를 입력해주세요.',
            type: 'password',
          }}
          errorMessage={errors.password}
        />
        <TextFieldFormGroup
          label='비밀번호 확인'
          textFieldProps={{
            ...getFieldProps('passwordCheck'),
            placeholder: '비밀번호를 한번 더 입력해주세요.',
            type: 'password',
          }}
          errorMessage={errors.passwordCheck}
        />
        <DropdownFormGroup
          label='멤버 타입'
          dropdownProps={{
            ...getFieldProps('type'),
            options: ADMIN_MEMBER_TYPE_OPTIONS,
          }}
          errorMessage={errors.type}
        />
        <FormGroup label='권한'>
          <AdminPermissionsInput />
        </FormGroup>
        <FormGroup label='플랫폼'>
          <Suggestion
            fullWidth
            fetcher={searchPlatform}
            getOptionLabel={(option) => `${option.ownerName} - ${option.platformName} (${option.platformId.split('/')[0]})`}
            onChange={handleChangePlatform}
            textFieldProps={{
              placeholder: '플랫폼을 선택하세요.',
            }}
          />
        </FormGroup>
      </PageTemplate>
    </Form>
  );
}

export default AdminFormContent;
