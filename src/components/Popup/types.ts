import { PopupType } from '@@components/Popup/constants';

export interface PopupOptions {
  onCancel?: () => void;
  buttons?: { text: string; onClick: () => void }[];
  type?: PopupType;
}

export interface PopupContextType {
  showPopup: (content: React.ReactNode, options?: PopupOptions) => void;
  hidePopup: () => void;
}

export interface PopupProps {
  visible: boolean;
  confirmText?: string;
  onConfirm: () => void;
  children: React.ReactNode;
}
