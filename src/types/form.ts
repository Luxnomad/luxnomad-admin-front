export type FormType = 'create' | 'update';

export interface FormProps<Data extends object> {
  initialValues: Data;
  onSubmit: (form: Data) => void;
  formType: FormType;
}
