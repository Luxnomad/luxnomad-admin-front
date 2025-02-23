import { PAGES } from '@@constants/permissions';
import adminRoute from '@@pages/Admin/route';
import memberRoute from '@@pages/Member/route';
import orderRoute from '@@pages/Order/route';
import orderProductRoute from '@@pages/OrderProduct/route';
import platformRoute from '@@pages/Platform/route';
import popupRoute from '@@pages/PopupManagement/route';
import postRoute from '@@pages/PostManagement/route';
import productRoute from '@@pages/Product/route';
import { RouteProps } from '@@router/types';
import { Pages } from '@@types/permissions';

export const routes: Partial<Record<Pages, RouteProps[]>> = {
  [PAGES.ADMIN]: adminRoute,
  [PAGES.PLATFORM]: platformRoute,
  [PAGES.PRODUCT]: productRoute,
  [PAGES.MEMBER]: memberRoute,
  [PAGES.POPUP_MANAGEMENT]: popupRoute,
  [PAGES.POST_MANAGEMENT]: postRoute,
  [PAGES.ORDER]: orderRoute,
  [PAGES.ORDER_PRODUCT]: orderProductRoute,
};
