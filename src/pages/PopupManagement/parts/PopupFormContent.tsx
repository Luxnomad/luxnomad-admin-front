import { ErrorMessage, Form, useFormikContext } from 'formik';
import ReactQuill from 'react-quill-new';
import styled from 'styled-components';

import Button from '@@components/Button';
import DatePicker from '@@components/DatePicker';
import Flex from '@@components/Flex';
import ImageForm from '@@components/ImageForm';
import PageTemplate from '@@components/PageTemplate';
import RadioGroup from '@@components/RadioGroup';
import TextFieldFormGroup from '@@components/TextFieldFormGroup';
import Typography from '@@components/Typography';
import { POPUP_STATUS } from '@@stores/popupManagement/constants';
import { UpsertPopupDTO } from '@@stores/popupManagement/types';
import { FormType } from '@@types/form';

import 'react-quill-new/dist/quill.snow.css';

const StyledPopupFormContent = styled(Flex.Vertical)`
  margin-top: 30px;
  .wrapDate {
    align-items: center;
  }
`;

function PopupFormContent({ formType }: { formType: FormType }) {
  const { getFieldProps, setFieldValue, handleSubmit, errors } = useFormikContext<UpsertPopupDTO>();

  return (
    <StyledPopupFormContent>
      <Form onSubmit={handleSubmit}>
        <PageTemplate headerContent={`팝업 ${formType === 'create' ? '생성' : '수정'}`} footerContent={<Button type='submit'>저장</Button>}>
          <TextFieldFormGroup
            label='제목'
            textFieldProps={{
              ...getFieldProps('popupTitle'),
              placeholder: '제목을 입력해주세요',
            }}
            errorMessage={errors.popupTitle}
          />
          <Flex.Horizontal gap={12}>
            <Typography.Subtitle1 className='tw-flex-1'>게시기간</Typography.Subtitle1>
            <Flex.Horizontal gap={12} flex={3} className='wrapDate'>
              <DatePicker
                label='Start Date'
                value={getFieldProps('popupStartDate').value}
                onChange={(date) => setFieldValue('popupStartDate', date)}
              />
              ~
              <DatePicker label='End Date' value={getFieldProps('popupEndDate').value} onChange={(date) => setFieldValue('popupEndDate', date)} />
              <ErrorMessage name='popupEndDate' />
            </Flex.Horizontal>
          </Flex.Horizontal>
          <Typography.Body1>내용</Typography.Body1>
          <ImageForm />
          <ReactQuill
            value={getFieldProps('popupDescription').value || ''}
            onChange={(content) => setFieldValue('popupDescription', content)}
            placeholder='내용을 입력해주세요'
          />
          <Flex.Horizontal className='tw-mt-4'>
            <RadioGroup
              label='사용여부'
              options={[
                { value: POPUP_STATUS.USE, label: '사용' },
                { value: POPUP_STATUS.UNUSED, label: '미사용' },
              ]}
              {...getFieldProps('status')}
            />
          </Flex.Horizontal>
        </PageTemplate>
      </Form>
    </StyledPopupFormContent>
  );
}

export default PopupFormContent;
