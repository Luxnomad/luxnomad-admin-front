import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { showErrorToast, showSuccessToast } from '@@components/Toast';
import { PATH } from '@@constants/path';
import ProductForm from '@@pages/Product/Form';
import { useProductDetail } from '@@pages/Product/hooks';
import { ProductEditForm } from '@@pages/Product/types';
import { sanitizeProductEditForm } from '@@pages/Product/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { updateProductFailure, updateProductRequest, updateProductSuccess } from '@@stores/product/reducer';

function ProductUpdate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const { data } = useProductDetail(id ?? '');

  const handleSubmit = (form: ProductEditForm) => {
    dispatch(updateProductRequest(sanitizeProductEditForm(form)));
  };

  useActionSubscribe({
    type: updateProductSuccess.type,
    callback: () => {
      showSuccessToast('상품 수정을 완료했습니다.');
      navigate(`${PATH.PRODUCT}/${id}`);
    },
  });

  useActionSubscribe({
    type: updateProductFailure.type,
    callback: ({ payload }: ReturnType<typeof updateProductFailure>) => {
      showErrorToast(payload);
    },
  });

  if (!data?.data) return 'loading...';

  const initialValues: ProductEditForm = {
    ...data.data,
    memberCode: 'test-service-MMR-1e1e4b',
    categoryId: 'test-service-CTG-0076',
  };

  return <ProductForm formType='update' initialValues={initialValues} onSubmit={handleSubmit} />;
}

export default ProductUpdate;
