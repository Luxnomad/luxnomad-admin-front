import { Formik } from 'formik';

import { productSchema } from '@@constants/schema';
import ProductFormContent from '@@pages/Product/parts/ProductFormContent';
import { ProductCreateForm, ProductEditForm } from '@@pages/Product/types';
import { FormProps } from '@@types/form';

function ProductForm<Data extends object = ProductCreateForm | ProductEditForm>({ formType, ...props }: FormProps<Data>) {
  return (
    <Formik {...props} validationSchema={productSchema}>
      <ProductFormContent formType={formType} />
    </Formik>
  );
}

export default ProductForm;
