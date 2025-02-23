import { PRODUCT_STATUS } from '@@stores/product/constants';
import { asType } from '@@types/common';

export type ProductStatus = asType<typeof PRODUCT_STATUS>;

export interface ProductListResponse {
  no: number;
  status: ProductStatus;
  id: string;
  name: string;
  categoryName: string;
  price: number;
}

export interface ProductDetailResponse {
  id: string;
  categoryName: string;
  name: string;
  desc: string;
  price: number;
  note: string;
  thumbnailUrl: string;
  keyword: string;
  status: ProductStatus;
  memberId: string;
  createDatetime: Date;
}

export interface Product {
  id: string;
  name: string;
  desc?: string;
  price?: number;
  note: string;
  keyword?: string;
  status?: ProductStatus;
  memberCode: string;
}

export interface ProductCreateRequest {
  name: string;
  desc?: string;
  price: number;
  note: string;
  keyword: string;
  status: ProductStatus;
  memberCode: string;
  categoryId?: string;
}

export interface ProductEditRequest {
  id: string;
  name: string;
  desc?: string;
  price: number;
  note: string;
  keyword: string;
  status: ProductStatus;
  memberCode: string;
  categoryId: string;
}
