import Dropdown from '@@components/Dropdown';
import EditableDetail from '@@components/EditableDetail';
import TextField from '@@components/TextField';
import { ProductDetailProps } from '@@pages/Product/types';
import { PRODUCT_STATUS } from '@@stores/product/constants';

function ProductBasicDetail({ title, data, isEdit }: ProductDetailProps) {
  return (
    <EditableDetail
      isEdit={isEdit}
      title={title}
      options={[
        {
          name: 'status',
          title: '상품 상태',
          isEditable: true,
          renderInputContent: () => (
            <Dropdown
              options={[
                { label: '활성', value: PRODUCT_STATUS.ENABLE },
                { label: '비활성', value: PRODUCT_STATUS.DISABLE },
              ]}
              defaultValue={data.status}
            />
          ),
        },
        {
          name: 'name',
          title: '상품명',
          isEditable: true,
          renderInputContent: () => <TextField id='name' name='name' defaultValue={data.name} />,
        },
        {
          name: 'price',
          title: 'Main 가격',
          isEditable: true,
          renderInputContent: () => <TextField id='price' name='price' defaultValue={data.price} />,
        },
        {
          name: 'subPrice',
          title: 'Sub 가격',
          isEditable: true,
          renderInputContent: () => <TextField id='subPrice' name='subPrice' defaultValue={data.price} />,
        },
      ]}
      data={data}
    />
  );
}

export default ProductBasicDetail;
