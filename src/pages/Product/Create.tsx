import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { showErrorToast, showSuccessToast } from '@@components/Toast';
import { PATH } from '@@constants/path';
import ProductForm from '@@pages/Product/Form';
import { ProductCreateForm } from '@@pages/Product/types';
import { sanitizeProductCreateForm } from '@@pages/Product/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { PRODUCT_STATUS } from '@@stores/product/constants';
import { createProductFailure, createProductRequest, createProductSuccess } from '@@stores/product/reducer';

const initialValues: ProductCreateForm = {
  name: '',
  desc: '',
  price: 0,
  note: '',
  keyword: '',
  memberCode: 'test-service-MMR-1e1e4b',
  status: PRODUCT_STATUS.ENABLE,
  categoryId: 'test-service-CTG-0076',
};

function ProductCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (form: ProductCreateForm) => {
    dispatch(createProductRequest(sanitizeProductCreateForm(form)));
  };

  useActionSubscribe({
    type: createProductSuccess.type,
    callback: () => {
      showSuccessToast('상품 생성을 완료했습니다.');
      navigate(PATH.PRODUCT);
    },
  });

  useActionSubscribe({
    type: createProductFailure.type,
    callback: ({ payload }: ReturnType<typeof createProductFailure>) => {
      showErrorToast(payload);
    },
  });

  return <ProductForm formType='create' initialValues={initialValues} onSubmit={handleSubmit} />;
}

export default ProductCreate;
