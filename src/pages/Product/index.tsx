import PageTemplate from '@@components/PageTemplate';
import Pagination from '@@components/Pagination';
import Table from '@@components/Table';
import { ProductDetailLink } from '@@constants/links';
import { CheckedListProvider } from '@@context/CheckedListContext';
import useSearch from '@@hooks/useSearch';
import { useProductList } from '@@pages/Product/hooks';
import FooterContent from '@@pages/Product/parts/FooterContent';
import ProductListFilter from '@@pages/Product/parts/ProductListFilter';
import ProductListHeader from '@@pages/Product/parts/ProductListHeader';
import { ProductListQuery } from '@@pages/Product/types';
import { PRODUCT_STATUS_STRING } from '@@stores/product/constants';
import { ProductListResponse } from '@@stores/product/types';

function Product() {
  const query = useSearch<ProductListQuery>();
  const { content, page } = useProductList(query, query.pageNo === undefined);

  return (
    <CheckedListProvider<ProductListResponse> defaultValue={[]}>
      <PageTemplate headerContent={'상품 관리'} footerContent={<FooterContent />}>
        <ProductListFilter />
        <ProductListHeader total={content?.length ?? 0} />
        <Table
          columns={[
            {
              name: 'productId',
              title: '상품 ID',
              renderContent: ({ id }) => <ProductDetailLink id={id} />,
            },
            {
              name: 'name',
              title: '상품명',
            },
            {
              name: 'price',
              title: '가격',
            },
            {
              name: 'status',
              title: '상태',
              renderContent: ({ status }) => PRODUCT_STATUS_STRING[status],
            },
          ]}
          rows={content ?? []}
          checkbox
          idKey='id'
          fallbackContent='Empty content...'
        />
        <Pagination current={page.current} lastPage={page.lastPage} />
      </PageTemplate>
    </CheckedListProvider>
  );
}

export default Product;
