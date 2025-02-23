import { format } from 'date-fns';

import Detail from '@@components/Detail';
import Flex from '@@components/Flex';
import { OrderProductDetailResponse } from '@@stores/orderProduct/types';
import { PRODUCT_STATUS_STRING } from '@@stores/product/constants';

function OrderProductDetailContent({ orderProduct }: { orderProduct: OrderProductDetailResponse['orderProduct'] }) {
  return (
    <Flex.Vertical className='tw-mt-8'>
      <Detail
        title='상품 정보'
        options={[
          {
            name: 'id',
            title: '상품 코드',
          },
          {
            name: 'categoryName',
            title: '상품 카테고리 명',
          },
          {
            name: 'name',
            title: '상품명',
          },
          {
            name: 'note',
            title: '상품 요약 설명',
          },
          {
            name: 'price',
            title: '상품 가격',
            renderContent: ({ price }) => `${price.toLocaleString()}원`,
          },
          {
            name: 'desc',
            title: '상품 상세 설명',
          },
          {
            name: 'thumbnailUrl',
            title: '상품 썸네일',
            renderContent: ({ thumbnailUrl }) => thumbnailUrl && <img src={thumbnailUrl} alt='상품 썸네일' />,
          },
          {
            name: 'keyword',
            title: '상품 키워드',
          },
          {
            name: 'status',
            title: '상품 판매 상태',
            renderContent: ({ status }) => `${PRODUCT_STATUS_STRING[status]}`,
          },
          {
            name: 'memberId',
            title: '상품 담당자 아이디',
          },
          {
            name: 'createDatetime',
            title: '상품 생성일시',
            renderContent: ({ createDatetime }) => `${format(createDatetime, 'yyyy.MM.dd')}`,
          },
        ]}
        data={orderProduct}
      />
    </Flex.Vertical>
  );
}

export default OrderProductDetailContent;
