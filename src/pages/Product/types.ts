import { ProductDetailResponse, ProductStatus } from '@@stores/product/types';
import { PageQuery } from '@@utils/request/types';

export interface ProductListQuery extends PageQuery {
  id?: string;
  name?: string;
  status?: ProductStatus;
  categoryId?: string;
}

export interface ProductDetailProps {
  isEdit: boolean;
  title: string;
  data: ProductDetailResponse;
}

export interface DetailFooterContentProps {
  isEdit: boolean;
  onEdit: () => void;
  onCancel: () => void;
}

export interface ProductCreateForm {
  name: string;
  note: string; // 상품 요약 설명
  price: number;
  desc?: string; // 상품 상세 설명
  keyword: string;
  status: ProductStatus;
  memberCode: string;
  categoryId?: string;
  platformId?: string;
}

export interface ProductEditForm {
  id: string;
  name: string;
  note: string; // 상품 요약 설명
  desc?: string; // 상품 상세 설명
  price: number;
  keyword: string;
  status: ProductStatus;
  memberCode: string;
  platformId?: string;
  categoryId: string;
}
