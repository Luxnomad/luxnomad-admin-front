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
import { POST_STATUS, POSTING_TYPE } from '@@stores/postManagement/constants';
import { UpsertPostDTO } from '@@stores/postManagement/types';
import { FormType } from '@@types/form';

import 'react-quill-new/dist/quill.snow.css';

const StyledPostFormContent = styled(Flex.Vertical)`
  margin-top: 30px;
  .wrapDate {
    align-items: center;
    margin-top: 20px;
  }
`;

function PostFormContent({ formType }: { formType: FormType }) {
  const { getFieldProps, setFieldValue, handleSubmit, errors } = useFormikContext<UpsertPostDTO>();

  const postingType = getFieldProps('postingType').value;

  return (
    <StyledPostFormContent>
      <Form onSubmit={handleSubmit}>
        <PageTemplate headerContent={`공지사항  ${formType === 'create' ? '생성' : '수정'}`} footerContent={<Button type='submit'>저장</Button>}>
          <TextFieldFormGroup
            label='제목'
            textFieldProps={{
              ...getFieldProps('postTitle'),
              placeholder: '제목을 입력해주세요',
            }}
            errorMessage={errors.postTitle}
          />
          <Flex.Horizontal>
            <RadioGroup
              label='게시방법'
              options={[
                { value: POSTING_TYPE.SPECIFIC, label: '지정' },
                { value: POSTING_TYPE.IMMEDIATE, label: '즉시' },
              ]}
              {...getFieldProps('postingType')}
            />
          </Flex.Horizontal>
          <Flex.Horizontal gap={12}>
            <Typography.Body2 className='tw-flex-1'>게시 일정</Typography.Body2>
            <Flex.Horizontal gap={12} flex={3} className='wrapDate'>
              <DatePicker
                label='Posting Schedule'
                value={getFieldProps('postingSchedule').value}
                onChange={(date) => setFieldValue('postingSchedule', date)}
                disabled={postingType === POSTING_TYPE.IMMEDIATE}
              />
              <ErrorMessage name='postingSchedule' />
            </Flex.Horizontal>
          </Flex.Horizontal>

          <Flex.Horizontal gap={12}>
            <Typography.Body2 className='tw-flex-1'>게시기간</Typography.Body2>
            <Flex.Horizontal gap={12} flex={3} className='wrapDate'>
              <DatePicker label='Start Date' value={getFieldProps('postStartDate').value} onChange={(date) => setFieldValue('postStartDate', date)} />
              ~
              <DatePicker label='End Date' value={getFieldProps('postEndDate').value} onChange={(date) => setFieldValue('postEndDate', date)} />
              <ErrorMessage name='postEndDate' />
            </Flex.Horizontal>
          </Flex.Horizontal>
          <Typography.Body2>내용</Typography.Body2>
          <ImageForm />
          <ReactQuill
            value={getFieldProps('postDescription').value || ''}
            onChange={(content) => setFieldValue('postDescription', content)}
            placeholder='내용을 입력해주세요'
          />
          <Flex.Horizontal className='tw-mt-4'>
            <RadioGroup
              label='사용여부'
              options={[
                { value: POST_STATUS.USE, label: '사용' },
                { value: POST_STATUS.UNUSED, label: '미사용' },
              ]}
              {...getFieldProps('status')}
            />
          </Flex.Horizontal>
        </PageTemplate>
      </Form>
    </StyledPostFormContent>
  );
}

export default PostFormContent;
