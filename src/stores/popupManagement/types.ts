import { POPUP_STATUS } from '@@stores/popupManagement/constants';
import { asType } from '@@types/common';

export type PopupStatue = asType<typeof POPUP_STATUS>;
export interface PopupList {
  id: string;
  popupId: string;
  popupTitle: string;
  displayOrder: number;
  status: PopupStatue;
  popupStartDate: Date;
  popupEndDate: Date;
}

export interface UpsertPopupDTO {
  popupId?: string;
  popupTitle: string;
  popupStartDate: string;
  popupEndDate: string;
  popupDescription: string;
  status?: PopupStatue;
  images: File[];
}
