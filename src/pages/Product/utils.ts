import { ProductCreateForm, ProductEditForm } from '@@pages/Product/types';
import { ProductCreateRequest, ProductEditRequest } from '@@stores/product/types';

export const sanitizeProductCreateForm = (form: ProductCreateForm): ProductCreateRequest => ({
  name: form.name,
  desc: form.desc,
  price: form.price,
  note: form.note,
  keyword: form.keyword,
  status: form.status,
  memberCode: form.memberCode,
  categoryId: form.categoryId,
});

export const sanitizeProductEditForm = (form: ProductEditForm): ProductEditRequest => ({
  id: form.id,
  name: form.name,
  desc: form.desc,
  price: form.price,
  note: form.note,
  keyword: form.keyword,
  status: form.status,
  memberCode: form.memberCode,
  categoryId: form.categoryId,
});
