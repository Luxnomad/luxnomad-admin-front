import { QuestionIcon, ConfirmatioIcon, ErrorIcon } from '@@components/Popup/Icons';

export const POPUP_TYPE_ICON = {
  question: QuestionIcon,
  confirmation: ConfirmatioIcon,
  error: ErrorIcon,
} as const;

export const POPUP_TYPES = {
  QUESTION: 'question',
  CONFIRMATION: 'confirmation',
  ERROR: 'error',
} as const;

export type PopupType = (typeof POPUP_TYPES)[keyof typeof POPUP_TYPES];
