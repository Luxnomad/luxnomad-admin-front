import EditableDetail from '@@components/EditableDetail';
import { ProductDetailProps } from '@@pages/Product/types';

function ProductImageDetail({ title, data, isEdit }: ProductDetailProps) {
  return (
    <EditableDetail
      isEdit={isEdit}
      title={title}
      options={[{ name: 'thumbnailUrl', title: '상품 썸네일', isEditable: true, renderContent: () => '이미지가 존재하지 않습니다.' }]}
      data={data}
    />
  );
}

export default ProductImageDetail;
