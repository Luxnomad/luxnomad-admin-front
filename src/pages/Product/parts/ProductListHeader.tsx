import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { useCheckedListContext } from '@@context/CheckedListContext/hooks';
import { useDeleteProduct } from '@@pages/Product/hooks';
import { ProductListResponse } from '@@stores/product/types';

const StyledProductListHeader = styled(Flex.Horizontal)`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 4px 0;
`;

interface ProductListHeaderProps {
  total: number;
}

function ProductListHeader({ total }: ProductListHeaderProps) {
  const { checkedList } = useCheckedListContext<ProductListResponse>();
  const { handleDeleteProduct } = useDeleteProduct();

  const handleDeleteSelectedItems = () => {
    if (window.confirm('선택하신 상품들을 정말 삭제하시겠습니까?')) {
      handleDeleteProduct(checkedList.map((item) => item.id));
    }
  };

  return (
    <StyledProductListHeader>
      <Typography.Subtitle1>총 상품 수: {total}</Typography.Subtitle1>
      <Button variant='outlined' color='error' onClick={handleDeleteSelectedItems}>
        {checkedList.length}개 삭제
      </Button>
    </StyledProductListHeader>
  );
}

export default ProductListHeader;
