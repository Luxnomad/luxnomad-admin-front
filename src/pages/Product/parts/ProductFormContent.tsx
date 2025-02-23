import { Form, useFormikContext } from 'formik';

import DropdownFormGroup from '@@components/DropdownFormGroup';
import FormGroup from '@@components/FormGroup';
import PageTemplate from '@@components/PageTemplate';
import Suggestion from '@@components/Suggestion';
import TextFieldFormGroup from '@@components/TextFieldFormGroup';
import FormFooterContent from '@@pages/Product/parts/FormFooterContent';
import { ProductCreateForm, ProductEditForm } from '@@pages/Product/types';
import { useIsSystemAdmin } from '@@stores/auth/selector';
import { MemberListSearchResposne } from '@@stores/member/types';
import { Platform } from '@@stores/platform/types';
import { PRODUCT_STATUS } from '@@stores/product/constants';
import { FormType } from '@@types/form';
import { searchMember, searchPlatform } from '@@utils/searchRequests';

function ProductFormContent({ formType }: { formType: FormType }) {
  const isAdmin = useIsSystemAdmin();

  const { getFieldProps, handleSubmit, errors, setFieldValue, values } = useFormikContext<ProductCreateForm | ProductEditForm>();

  const handleChangeMember = (option: MemberListSearchResposne) => {
    setFieldValue('memberCode', option.memberCode);
  };

  const handleChangePlatform = (option: Platform) => {
    setFieldValue('platformId', option.platformId);
  };

  const handleSearchMember = async (keyword: string): Promise<MemberListSearchResposne[]> => {
    const response = await searchMember(keyword, values.platformId);
    return response;
  };

  return (
    <Form onSubmit={handleSubmit}>
      <PageTemplate headerContent={`상품 ${formType === 'create' ? '생성' : '수정'}`} footerContent={<FormFooterContent formType={formType} />}>
        <TextFieldFormGroup
          label='상품명'
          textFieldProps={{ ...getFieldProps('name'), placeholder: '상품명을 입력해주세요.' }}
          errorMessage={errors.name}
        />
        <TextFieldFormGroup
          label='상품가격'
          textFieldProps={{ ...getFieldProps('price'), type: 'number', placeholder: '상품 가격을 입력해주세요.' }}
          errorMessage={errors.price}
        />
        <TextFieldFormGroup
          label='상품 요약 설명'
          textFieldProps={{ ...getFieldProps('note'), placeholder: '상품 요약 설명을 입력해주세요.' }}
          errorMessage={errors.note}
        />
        <TextFieldFormGroup
          label='상품 상세 설명'
          textFieldProps={{ ...getFieldProps('desc'), multiline: true, placeholder: '상품 상세 설명을 입력해주세요.' }}
          errorMessage={errors.desc}
        />
        <DropdownFormGroup
          label='상품 상태'
          dropdownProps={{
            ...getFieldProps('status'),
            options: [
              { label: '활성', value: PRODUCT_STATUS.ENABLE },
              { label: '비활성', value: PRODUCT_STATUS.DISABLE },
            ],
          }}
          errorMessage={errors.status}
        />
        {/* <TextFieldFormGroup label='상품 이미지' textFieldProps={{ ...getFieldProps('productThumbnail'), placeholder: '상품명을 입력해주세요.' }} /> */}
        <TextFieldFormGroup
          label='상품 키워드'
          textFieldProps={{ ...getFieldProps('keyword'), placeholder: '상품 키워드를 공백으로 나눠서 입력해주세요.' }}
        />
        {isAdmin && (
          <FormGroup label='플랫폼 ID'>
            <Suggestion
              fullWidth
              fetcher={searchPlatform}
              getOptionLabel={(option) => `${option.platformName}`}
              onChange={handleChangePlatform}
              textFieldProps={{
                placeholder: '플랫폼을 선택하세요.',
              }}
            />
          </FormGroup>
        )}
        <FormGroup label='상품 판매자'>
          <Suggestion
            fullWidth
            fetcher={handleSearchMember}
            getOptionLabel={(option) => `${option.memberName} - ${option.platformName}`}
            onChange={handleChangeMember}
            textFieldProps={{
              placeholder: '상품 판매자를 선택하세요.',
            }}
          />
        </FormGroup>
      </PageTemplate>
    </Form>
  );
}

export default ProductFormContent;
