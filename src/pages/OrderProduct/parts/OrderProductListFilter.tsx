import { useDispatch } from 'react-redux';
import { Col, Row } from 'reactstrap';

import Button from '@@components/Button';
import DatePicker from '@@components/DatePicker';
import FilterContainer from '@@components/FilterContainer';
import Flex from '@@components/Flex';
import { usePopup } from '@@components/Popup/utils';
import RadioGroup from '@@components/RadioGroup';
import TextField from '@@components/TextField';
import { showErrorToast, showSuccessToast } from '@@components/Toast';
import { useCheckedListContext } from '@@context/CheckedListContext/hooks';
import { useOrderProductList } from '@@pages/OrderProduct/hooks';
import { OrderProductListQuery, OrderProductListWithIdResponse } from '@@pages/OrderProduct/types';
import { sanitzieOrderConfirmRequest } from '@@pages/OrderProduct/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { ORDER_STATUS, ORDER_STATUS_PRIORITY, ORDER_STATUS_STRING } from '@@stores/order/constants';
import { confirmOrderFailure, confirmOrderRequest, confirmOrderSuccess } from '@@stores/orderProduct/reducer';
import { useQueryParams } from '@@utils/request/hooks';

const initialQuery: OrderProductListQuery = {
  pageNo: 0,
};

function OrderProductListFilter() {
  const dispatch = useDispatch();

  const { query, updateQuery } = useQueryParams(initialQuery, {
    initialSearch: ({ pageNo }) => pageNo === undefined,
  });

  const { checkedList, setCheckedList } = useCheckedListContext<OrderProductListWithIdResponse>();
  const { showPopup, hidePopup } = usePopup();

  const { mutate } = useOrderProductList(query);

  const changeableOrderList = checkedList.filter(
    ({ orderStatus }) => ORDER_STATUS_PRIORITY[orderStatus] < ORDER_STATUS_PRIORITY[ORDER_STATUS.SHIPPING]
  );

  const disabled = changeableOrderList.length === 0;

  const handleClickShippingOrder = () => {
    showPopup(`${changeableOrderList.length}건의 주문을 발송 처리하시겠습니까?`, {
      type: 'question',
      onCancel: () => {
        hidePopup();
      },
      buttons: [
        {
          text: '확인',
          onClick: handleConfirmPopup,
        },
      ],
    });
  };

  const handleConfirmPopup = () => {
    dispatch(confirmOrderRequest(sanitzieOrderConfirmRequest(changeableOrderList)));
  };

  useActionSubscribe({
    type: confirmOrderSuccess.type,
    callback: () => {
      showSuccessToast('발송 처리를 완료했습니다.');
      setCheckedList([]);
      mutate();
    },
  });

  useActionSubscribe({
    type: confirmOrderFailure.type,
    callback: ({ payload }: ReturnType<typeof confirmOrderFailure>) => {
      showErrorToast(payload);
    },
  });

  return (
    <FilterContainer>
      <Row>
        <Col md={3}>
          <TextField
            placeholder='상품명을 입력해주세요.'
            label='상품명'
            value={query.productName ?? ''}
            onChange={(e) => updateQuery('productName', e.target.value)}
          />
        </Col>
        <Col md={3}>
          <TextField
            placeholder='주문자 코드를 입력해주세요.'
            label='주문자 코드'
            value={query.orderMemberCode ?? ''}
            onChange={(e) => updateQuery('orderMemberCode', e.target.value)}
          />
        </Col>
        <Col md={6}>
          <Flex.Horizontal className='tw-items-center' gap={12}>
            <DatePicker label='주문일자(시작)' value={query.orderFrom} onChange={(date) => updateQuery('orderFrom', date?.toISOString())} />
            <DatePicker label='주문일자(종료)' value={query.orderTo} onChange={(date) => updateQuery('orderTo', date?.toISOString())} />
          </Flex.Horizontal>
        </Col>
      </Row>
      <Row>
        <Flex.Horizontal justifyContent='space-between'>
          <RadioGroup
            label='주문 상태'
            options={[...Object.values(ORDER_STATUS).map((status) => ({ value: status, label: ORDER_STATUS_STRING[status] }))]}
            value={query.orderStatuses}
            onChange={(e) => updateQuery('orderStatuses', [e.target.value])}
          />
          <Button onClick={handleClickShippingOrder} disabled={disabled}>
            상품 발송 {!disabled && `(${changeableOrderList.length}건)`}
          </Button>
        </Flex.Horizontal>
      </Row>
    </FilterContainer>
  );
}

export default OrderProductListFilter;
