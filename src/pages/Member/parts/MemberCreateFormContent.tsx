import { Form, useFormikContext } from 'formik';

import FormGroup from '@@components/FormGroup';
import PageTemplate from '@@components/PageTemplate';
import Suggestion from '@@components/Suggestion';
import TextFieldFormGroup from '@@components/TextFieldFormGroup';
import FormFooterContent from '@@pages/Member/parts/FormFooterContent';
import { CreateMemberForm } from '@@pages/Member/types';
import { Platform } from '@@stores/platform/types';
import { searchPlatform } from '@@utils/searchRequests';

function MemberCreateFormContent() {
  const { getFieldProps, setFieldValue, handleSubmit, errors } = useFormikContext<CreateMemberForm>();

  const handleChangePlatform = (platform: Platform) => {
    setFieldValue('platformId', platform.platformId);
  };

  return (
    <Form className='tw-mt-10' onSubmit={handleSubmit}>
      <PageTemplate headerContent='유저 생성' footerContent={<FormFooterContent formType='create' />}>
        <TextFieldFormGroup
          label='이름'
          textFieldProps={{
            ...getFieldProps('name'),
            placeholder: '이름을 입력해주세요.',
          }}
          errorMessage={errors.name}
        />
        <TextFieldFormGroup
          label='연락처'
          textFieldProps={{
            ...getFieldProps('tel'),
            placeholder: '연락처를 입력해주세요',
          }}
          errorMessage={errors.tel}
        />
        <TextFieldFormGroup
          label='아이디'
          textFieldProps={{
            ...getFieldProps('id'),
            placeholder: '아이디를 입력해주세요.',
          }}
          errorMessage={errors.id}
        />
        <TextFieldFormGroup
          label='비밀번호'
          textFieldProps={{
            ...getFieldProps('password'),
            type: 'password',
            placeholder: '비밀번호를 입력해주세요.',
          }}
          errorMessage={errors.password}
        />
        <TextFieldFormGroup
          label='비밀번호 확인'
          textFieldProps={{
            ...getFieldProps('passwordCheck'),
            type: 'password',
            placeholder: '비밀번호를 한번 더 입력해주세요.',
          }}
          errorMessage={errors.passwordCheck}
        />
        <TextFieldFormGroup
          label='이메일'
          textFieldProps={{
            ...getFieldProps('email'),
            placeholder: '이메일을 입력해주세요.',
          }}
          errorMessage={errors.email}
        />
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

export default MemberCreateFormContent;
