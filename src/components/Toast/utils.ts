import { toast } from 'react-toastify';

import { DEFAULT_TOAST_OPTIONS } from '@@components/Toast/constants';
import { ToastContent } from '@@components/Toast/types';

export const showSuccessToast = (content: ToastContent) => {
  toast(content, {
    ...DEFAULT_TOAST_OPTIONS,
    type: 'success',
  });
};

export const showErrorToast = (content: ToastContent) => {
  toast(content, {
    ...DEFAULT_TOAST_OPTIONS,
    type: 'error',
    autoClose: 5000,
  });
};
