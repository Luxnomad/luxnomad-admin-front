import { useState } from 'react';

import { format } from 'date-fns';
import { useParams } from 'react-router-dom';

import EditableDetail from '@@components/EditableDetail';
import Flex from '@@components/Flex';
import PageTemplate from '@@components/PageTemplate';
import TabContainer from '@@components/TabContainer';
import { MemberDetailLink } from '@@constants/links';
import { useProductDetail } from '@@pages/Product/hooks';
import DetailFooterContent from '@@pages/Product/parts/DetailFooterContent';
import ProductBasicDetail from '@@pages/Product/parts/ProductBasicDetail';
import ProductExtendedDetail from '@@pages/Product/parts/ProductExtendedDetail';
import ProductImageDetail from '@@pages/Product/parts/ProductImageDetail';

function ProductDetail() {
  const { id } = useParams();
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [isEdit, setIsEdit] = useState(false);

  const { data } = useProductDetail(id ?? '');

  if (!data?.data) return 'loading...';

  return (
    <PageTemplate
      headerContent={`상품 (${data.data.id})`}
      footerContent={<DetailFooterContent isEdit={isEdit} onEdit={() => setIsEdit(true)} onCancel={() => setIsEdit(false)} />}
    >
      <Flex.Vertical gap={30}>
        <EditableDetail
          title='상품 분류정보'
          options={[
            {
              name: 'id',
              title: '상품 ID',
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
              name: 'keyword',
              title: '키워드',
            },
            {
              name: 'createdAt',
              title: '생성일자',
              renderContent: ({ createDatetime }) => format(createDatetime, 'yyyy년 MM월 dd일 HH시 mm분'),
            },
            {
              name: 'memberId',
              title: '상품 판매자',
              renderContent: ({ memberId }) => memberId && <MemberDetailLink id={memberId} />,
            },
          ]}
          data={data.data}
        />
        <TabContainer
          tabs={[
            { label: '상품 기본정보', content: <ProductBasicDetail title='상품 기본정보' data={data.data} isEdit={isEdit} /> },
            { label: '상품 상세정보', content: <ProductExtendedDetail title='상품 상세정보' data={data.data} isEdit={isEdit} /> },
            { label: '상품 이미지', content: <ProductImageDetail title='상품 이미지' data={data.data} isEdit={isEdit} /> },
          ]}
          selectedIndex={selectedTabIndex}
          onChangeTab={setSelectedTabIndex}
        />
      </Flex.Vertical>
    </PageTemplate>
  );
}

export default ProductDetail;
