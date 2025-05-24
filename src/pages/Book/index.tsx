import { Formik } from 'formik';

import BookFormContent from './parts/BookFormContent';
import { BookForm } from './types';

const initialValues: BookForm = {};

function Book() {
  const handleSubmit = () => {};

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <BookFormContent />
    </Formik>
  );
}

export default Book;
