import { PopupStatue } from '@@stores/popupManagement/types';
import { PageQuery } from '@@utils/request/types';

export interface PopupListQuery extends PageQuery {
  popupId?: string;
  popupName?: string;
  status?: PopupStatue;
}
