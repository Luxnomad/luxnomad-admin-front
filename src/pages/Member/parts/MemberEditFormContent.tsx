import { useState } from 'react';

import { format } from 'date-fns';
import { Form, useFormikContext } from 'formik';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import PageTemplate from '@@components/PageTemplate';
import Pagination from '@@components/Pagination';
import RadioGroup from '@@components/RadioGroup';
import RowGroup from '@@components/RowGroup';
import Table from '@@components/Table';
import TextFieldFormGroup from '@@components/TextFieldFormGroup';
import { showErrorToast, showSuccessToast } from '@@components/Toast';
import Typography from '@@components/Typography';
import { OrderProductDetailLink, PlatformDetailLink } from '@@constants/links';
import FormFooterContent from '@@pages/Member/parts/FormFooterContent';
import { EditMemberForm } from '@@pages/Member/types';
import { useOrderProductList } from '@@pages/OrderProduct/hooks';
import { dispatch } from '@@store';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { MEMBER_STATUS } from '@@stores/member/constants';
import { resetPasswordFailure, resetPasswordRequest, resetPasswordSuccess } from '@@stores/member/reducer';
import { ORDER_STATUS_STRING } from '@@stores/order/constants';

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #aaa;
  margin: 20px 0;
`;

function MemberEditFormContent() {
  const { id } = useParams();

  const [pageNo, setPageNo] = useState(0);
  const { getFieldProps, setFieldValue, handleSubmit, values, errors } = useFormikContext<EditMemberForm>();

  const { content, page } = useOrderProductList({ pageNo, orderMemberCode: id });

  const handleChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue('status', e.target.value);
  };

  const handleResetPassword = () => {
    dispatch(resetPasswordRequest(values.code));
  };

  useActionSubscribe({
    type: resetPasswordSuccess.type,
    callback: ({ payload }: ReturnType<typeof resetPasswordSuccess>) => showSuccessToast(` 비밀번호 초기화가 완료되었습니다. ${payload}`),
  });

  useActionSubscribe({
    type: resetPasswordFailure.type,
    callback: ({ payload }: ReturnType<typeof resetPasswordFailure>) => showErrorToast(payload),
  });

  return (
    <Form className='tw-mt-10' onSubmit={handleSubmit}>
      <PageTemplate headerContent={`유저 수정`} footerContent={<FormFooterContent formType={'update'} />}>
        <RowGroup label='이름'>{values.name}</RowGroup>
        <RowGroup label='플랫폼'>
          <PlatformDetailLink id={values.platformId ?? ''}>{values.platformName}</PlatformDetailLink>
        </RowGroup>
        <TextFieldFormGroup
          label='연락처'
          textFieldProps={{
            ...getFieldProps('tel'),
            placeholder: '연락처를 입력해주세요',
          }}
          errorMessage={errors.tel}
        />
        <TextFieldFormGroup
          label='이메일'
          textFieldProps={{
            ...getFieldProps('email'),
            placeholder: '이메일을 입력해주세요.',
          }}
          errorMessage={errors.email}
        />
        <RowGroup label='비밀번호 초기화'>
          <Button onClick={handleResetPassword}>비밀번호 초기화</Button>
        </RowGroup>
        <RowGroup label='상태'>
          <RadioGroup
            options={[
              { label: '활성', value: MEMBER_STATUS.ENABLE },
              { label: '비활성', value: MEMBER_STATUS.DISABLE },
            ]}
            value={values.status}
            onChange={handleChangeStatus}
          />
        </RowGroup>
        <RowGroup label='가입일'>
          <p>{format(new Date(values.createDatetime), 'yyyy.MM.dd')}</p>
        </RowGroup>
        {!!content?.length && (
          <div>
            <Divider />
            <Typography.Headline2>주문 정보</Typography.Headline2>
            <Table
              columns={[
                {
                  name: 'productInfo',
                  title: '상품명',
                  renderContent: ({ orderCode, productInfo }) => (
                    <OrderProductDetailLink orderCode={orderCode} id={productInfo.code}>
                      {productInfo.name}
                    </OrderProductDetailLink>
                  ),
                },
                {
                  name: 'orderPrice',
                  title: '주문가',
                  renderContent: ({ orderPrice }) => orderPrice.toLocaleString(),
                },
                {
                  name: 'orderStatus',
                  title: '주문상태',
                  renderContent: ({ orderStatus }) => ORDER_STATUS_STRING[orderStatus],
                },
                {
                  name: 'orderCode',
                  title: '주문정보',
                  renderContent: ({ orderCode }) => `${orderCode}`,
                },
              ]}
              rows={content ?? []}
            />
            <Pagination current={page.current} lastPage={page.lastPage} onChange={(page) => setPageNo(page)} />
          </div>
        )}
      </PageTemplate>
    </Form>
  );
}

export default MemberEditFormContent;
