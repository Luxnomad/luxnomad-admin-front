import { useDispatch } from 'react-redux';

import { showErrorToast, showSuccessToast } from '@@components/Toast';
import { ProductListQuery } from '@@pages/Product/types';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { deleteProductRequest, deleteProductSuccess, deleteProductFailure } from '@@stores/product/reducer';
import { ProductDetailResponse, ProductListResponse } from '@@stores/product/types';
import { useSWRDetail, useSWRList } from '@@utils/request/hooks';
import { UbittzPageResponse } from '@@utils/request/types';
import { formatSWRListResponse } from '@@utils/request/utils';

export const useProductList = (query: ProductListQuery, skip?: boolean) => {
  const result = useSWRList<UbittzPageResponse<ProductListResponse>>('api/product/list', {
    query,
    config: {
      skip,
    },
  });

  return formatSWRListResponse(result);
};

export const useProductDetail = (productId: string) => {
  const { data, mutate, isLoading } = useSWRDetail<ProductDetailResponse>(`api/product/detail/${productId}`, {
    skip: !productId,
  });

  return {
    data,
    mutate,
    isLoading,
  } as const;
};

export const useDeleteProduct = () => {
  const dispatch = useDispatch();

  const handleDeleteProduct = (productIds: string[]) => {
    dispatch(deleteProductRequest(productIds));
  };

  useActionSubscribe({
    type: deleteProductSuccess.type,
    callback: () => {
      showSuccessToast('상품 삭제를 완료했습니다.');
    },
  });

  useActionSubscribe({
    type: deleteProductFailure.type,
    callback: ({ payload }: ReturnType<typeof deleteProductFailure>) => {
      showErrorToast(payload);
    },
  });

  return {
    handleDeleteProduct,
  } as const;
};
