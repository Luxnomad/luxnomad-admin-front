import EditableDetail from '@@components/EditableDetail';
import Iframe from '@@components/IFrame';
import TextArea from '@@components/TextArea';
import { ProductDetailProps } from '@@pages/Product/types';

function ProductExtendedDetail({ title, data, isEdit }: ProductDetailProps) {
  return (
    <EditableDetail
      isEdit={isEdit}
      title={title}
      options={[
        {
          name: 'desc',
          title: '상품 상세 설명',
          isEditable: true,
          renderContent: ({ desc }) => <Iframe content={desc.replace(/\n/g, '<br />')} />,
          renderInputContent: () => <TextArea id='productDetail' name='productDetail' defaultValue={data.desc} />,
        },
      ]}
      data={data}
    />
  );
}

export default ProductExtendedDetail;
